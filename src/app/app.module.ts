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
import { KendoGridComponent } from './shared/widgets/kendo-grid/kendo-grid.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, TaskListComponent, ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    InputsModule,
    LabelModule,
    NgxsModule.forRoot([], {
      developmentMode: /** !environment.production */ false,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      keys: [],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
