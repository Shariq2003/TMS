import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Task } from '../../store/models/tasks.model';
import {
  CreateTask,
  ReadTasks,
  UpdateTask,
  DeleteTask,
} from '../../store/actions/tasks.action';
import { TasksState } from '../../store/states/tasks.state';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(private store: Store) {
    this.tasks$ = this.store.select(TasksState.getTasks);
  }

  ngOnInit(): void {
    this.store.dispatch(new ReadTasks());
  }

  addTask() {
    const newTask: Task = {
      id: Date.now().toString(),
      title: 'New Task',
      description: 'Created from UI',
      status: 'incomplete',
    };
    this.store.dispatch(new CreateTask(newTask));
  }

  completeTask(task: Task) {
    const updatedTask = { ...task, status: 'complete' };
    this.store.dispatch(new UpdateTask({ id: +task.id, task: updatedTask }));
  }

  deleteTask(id: string) {
    this.store.dispatch(new DeleteTask(+id));
  }
}
