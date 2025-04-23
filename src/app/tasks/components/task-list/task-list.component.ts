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
import TaskActions from '../../store/models/taskActions.model';

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
  columnFields: any[]  = [
    { field: 'id', title: 'ID' },
    { field: 'title', title: 'Title' },
    { field: 'description', title: 'Description' },
    { field: 'status', title: 'Status' },
    { field: 'priority', title: 'Priority' },
    { field: 'startDate', title: 'Start Date' },
    { field: 'endDate', title: 'End Date' },
    { field: 'assigned', title: 'Assigned To' },
  ];

  actions: TaskActions[] = [
    { class: 'k-icon k-font-icon k-i-eye', color: 'blue', link: '/view', type: 'view' },
    { class: 'k-icon k-font-icon k-i-edit', color: 'green', link: '/edit', type: 'edit' },
    { class: 'k-icon k-font-icon k-i-trash', color: 'red', link: '/', type: 'delete' },
  ];

  constructor(private store: Store) {
    // this.store.dispatch(new ReadTasks());
    // this.tasks$ = this.store.select(TasksState.getTasks);
    this.handleClick = this.handleClick.bind(this); 
    // Explicitly bind the method to the component instance(becuase for delete action, the intance or context of the 'this' is of the widget and cuasing the store to be undefined)
  }
  // onSearchChange(): void {
  //   const term = this.searchControl.value.toLowerCase();
  //   console.log('Search term:', term);
  //   this.filteredTasks = this.taskList.filter((task) =>
  //     Object.values(task).some((value) =>
  //       String(value).toLowerCase().includes(term)
  //     )
  //   );
  // }
  fetchHandler(): void {
    this.store.dispatch(new ReadTasks());
  }
  handleClick(id:number): void {
    console.log('Delete action clicked for task with ID:', id);
    this.store.dispatch(new DeleteTask(id)).subscribe(() => {
      this.fetchHandler();
    });
  }
  ngOnInit(): void {
    this.tasks = this.store.select(TasksState.getTasks);

    this.tasks.subscribe((tasks) => {
      if (!tasks || tasks.length === 0) {
        this.store.dispatch(new ReadTasks());
      }
      this.taskList = tasks;
      // this.searchControl.valueChanges.subscribe((value) => {
      //   this.onSearchChange();
      // });
    });
  }
}
