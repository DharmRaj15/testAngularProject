import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ToDoComponent } from './to-do/to-do.component';
import { StopWatchComponent } from './stop-watch/stop-watch.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ToDoComponent,
    StopWatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
