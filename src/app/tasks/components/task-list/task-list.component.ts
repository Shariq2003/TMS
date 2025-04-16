import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
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
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks!: Observable<Task[]>;
  taskList: Task[] = [];
  filteredTasks: Task[] = [];
  searchControl: FormControl = new FormControl('');

  constructor(private store: Store) {
    // this.store.dispatch(new ReadTasks());
    // this.tasks$ = this.store.select(TasksState.getTasks);
  }
  onSearchChange(): void {
    const term = this.searchControl.value.toLowerCase();
    console.log('Search term:', term);
    this.filteredTasks = this.taskList.filter((task) =>
      Object.values(task).some((value) =>
        String(value).toLowerCase().includes(term)
      )
    );
  }

  ngOnInit(): void {
    this.tasks = this.store.select(TasksState.getTasks);

    this.tasks.subscribe((tasks) => {
      if (!tasks || tasks.length === 0) {
        this.store.dispatch(new ReadTasks());
      }
      this.taskList = tasks;
      this.searchControl.valueChanges.subscribe((value) => {
        this.onSearchChange();
      });
    });
  }
}
