import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskFormComponent } from './task-form/task-form.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskCardComponent,
    TaskFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
