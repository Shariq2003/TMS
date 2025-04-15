import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Task } from '../models/tasks.model';
import {
  CreateTask,
  ReadTasks,
  UpdateTask,
  DeleteTask,
} from '../actions/tasks.action';
import { TasksService } from '../../services/api/api.service';
import { tap } from 'rxjs/operators';

export interface TasksStateModel {
  tasks: Task[];
}

@State<TasksStateModel>({
  name: 'tasks',
  defaults: {
    tasks: [],
  },
})
@Injectable()
export class TasksState {
  constructor(private tasksService: TasksService) {}

  @Selector()
  static getTasks(state: TasksStateModel): Task[] {
    return state?.tasks ?? [];
  }

  @Action(CreateTask)
  createTask(ctx: StateContext<TasksStateModel>, action: CreateTask) {
    return this.tasksService.createTask(action.payload).pipe(
      tap((newTask: Task) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          tasks: [...state.tasks, newTask],
        });
      })
    );
  }

  @Action(ReadTasks)
  readTasks(ctx: StateContext<TasksStateModel>) {
    return this.tasksService.getTasks().pipe(
      tap((tasks: Task[]) => {
        ctx.patchState({ tasks });
      })
    );
  }

  @Action(UpdateTask)
  updateTask(ctx: StateContext<TasksStateModel>, action: UpdateTask) {
    return this.tasksService
      .updateTask(action.payload.id, action.payload.task)
      .pipe(
        tap((updatedTask: Task) => {
          const state = ctx.getState();
          const tasks = state.tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          );
          ctx.setState({ ...state, tasks });
        })
    );
  }

  @Action(DeleteTask)
  deleteTask(ctx: StateContext<TasksStateModel>, action: DeleteTask) {
    return this.tasksService.deleteTask(action.payload).pipe(
      tap(() => {
        const state = ctx.getState();
        const filteredTasks = state.tasks.filter(
          (task) => task.id !== action.payload.toString()
        );
        ctx.setState({ ...state, tasks: filteredTasks });
      })
    );
  }
}
