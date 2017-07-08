import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberInc: number = 0;
  oddNumber: string = "";
  evenNumber: string = "";
  enable: boolean = false;
  interval;

  constructor() {
  }

  enableGame(status: { enable: boolean }) {
    this.enable = status.enable;
    if (this.enable) {
      this.interval = setInterval(() => {
        this.numberInc = this.numberInc + 1;
        if ((this.numberInc % 2)) {
          this.oddNumber = this.oddNumber + this.numberInc + ", ";
        } else {
          this.evenNumber = this.evenNumber + this.numberInc + ", ";
        };
      }, 1000);
    } else {
      this.oddNumber = "";
      this.evenNumber = "";
      this.numberInc = 0;
      clearInterval(this.interval);
    }

  }

}
