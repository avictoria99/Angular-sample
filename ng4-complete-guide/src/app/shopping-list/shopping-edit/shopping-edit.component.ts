import { Ingredient } from './../../share/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef  : ElementRef;
  @Output() ingridientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
     const ingName = this.nameInputRef.nativeElement.value;
     const ingAmout = this.amountInputRef.nativeElement.value;
     const newIngredient = new Ingredient(ingName,ingAmout);
     this.ingridientAdded.emit(newIngredient);
  }

}
