import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] =[
    new Recipe('A test Recipe','descripcion 1','https://www.plasticstoday.com/sites/default/files/images/Red-Solo-Cup.jpg'),
    new Recipe('A test Recipe 2','description 2','http://www.cafekopiluwak.ca/wp-content/uploads/2013/06/tasse-rouge.jpg'),
    new Recipe('A test Recipe 3','description 3','https://images-na.ssl-images-amazon.com/images/I/71MRDTuT-PL._SY355_.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

   onRecipeSelected(recipe : Recipe) {
        this.recipeWasSelected.emit(recipe);
   }


}
