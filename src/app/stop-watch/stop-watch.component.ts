import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.css']
})
export class StopWatchComponent implements OnInit {

  elapsedTime: number = 0;
  inetrvalRef: any;
  isRunning: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  startstop() {
    this.isRunning ? this.stopStopwatch() : this.startStopwatch();
  }

  startStopwatch() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.inetrvalRef = setInterval(() => {
        this.elapsedTime+=0.1;
      }, 100);
    }
    console.log(this.elapsedTime);
  }

  stopStopwatch() {
    if (this.isRunning) {
      this.isRunning = false;
      clearInterval(this.inetrvalRef);
    }
    console.log(this.elapsedTime);
  }

  resetStopwatch() {
    this.isRunning = false;
    clearInterval(this.inetrvalRef);
    this.elapsedTime = 0;
    console.log(this.elapsedTime);
  }

}
