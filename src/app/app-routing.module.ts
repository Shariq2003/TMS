import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {tasksRoutes} from './tasks/tasks-routing.module';

const routes: Routes = [
  ...tasksRoutes,
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
