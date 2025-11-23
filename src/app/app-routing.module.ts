import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ToDoComponent } from './to-do/to-do.component';

const routes: Routes = [

   {path: 'counter', component:CounterComponent, pathMatch: 'full'},
   {path: 'todo', component:ToDoComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }