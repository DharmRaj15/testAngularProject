import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

  tasks: string[] = [];
  newTask: string = '';
  taskDate: Date = new Date();

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim()+' (Added on: '+ this.taskDate.toLocaleString() +')');
      this.newTask = '';
    }
  }

  // remove single task by index
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
