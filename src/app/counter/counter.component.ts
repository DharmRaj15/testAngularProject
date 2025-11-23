import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  countervalue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.countervalue++;
  }

  decrement() {
      this.countervalue--;
  }

  reset(){
    this.countervalue = 0;
  }
  getCounterStatus(): string {
    if (this.countervalue > 0) {
      return 'Positive';
    } else if (this.countervalue < 0) {
      return 'Negative';
    } else {
      return 'Zero';
    }
  }
}
