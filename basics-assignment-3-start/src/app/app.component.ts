import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
        .white {
            color : white;
        }
  `]
})
export class AppComponent {
  toggleParagraph : boolean = true;
  clicks=[];
  // inc :number =0;

onClick() {
    // this.inc = this.inc + 1;
    this.toggleParagraph = ! this.toggleParagraph;
    this.clicks.push("Click " + new Date());
}
}
