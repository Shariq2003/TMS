import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { TaskListComponent } from './tasks/components/task-list/task-list.component';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { TasksState } from './tasks/store/states/tasks.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TaskViewComponent } from './tasks/components/task-view/task-view.component';
import { TaskEditComponent } from './tasks/components/task-edit/task-edit.component';
import { TaskFilterPipe } from './tasks/pipes/task-filter.pipe';
import { TaskAddComponent } from './tasks/components/task-add/task-add.component';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderComponent } from './tasks/components/loader/loader.component';
import { NotificationModule } from '@progress/kendo-angular-notification';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskViewComponent,
    TaskEditComponent,
    TaskFilterPipe,
    TaskAddComponent,
    LoaderComponent,
  ],
  imports: [
    NotificationModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    AppRoutingModule,
    InputsModule,
    LabelModule,
    NgxsModule.forRoot([TasksState], {
      developmentMode: /** !environment.production */ false,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      keys: ['tasks'],
    }),
  ],
  providers: [
    importProvidersFrom(FormsModule),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
