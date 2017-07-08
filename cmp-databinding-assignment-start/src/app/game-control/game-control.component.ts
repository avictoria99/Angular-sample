import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() statusGame = new  EventEmitter<{enable : boolean}>();


  ngOnInit() {
  }

  startInterval() {
    this.statusGame.emit({ enable : true });
  }

  clearInterval() {
    this.statusGame.emit({ enable : false});
  }

}


