import { RouterModule, Routes } from '@angular/router';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskViewComponent } from './components/task-view/task-view.component';
import { TaskAddComponent } from './components/task-add/task-add.component';

export const tasksRoutes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'view/:id', component: TaskViewComponent },
  { path: 'edit/:id', component: TaskEditComponent },
  { path: 'add', component: TaskAddComponent },
];
