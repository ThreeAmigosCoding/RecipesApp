import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Ingredient} from "./filters/filters.component";

@Injectable({
  providedIn: 'root'
})
export class RecipesSearchService {

  private ingredients : Ingredient[] = []
  private $pantry = new BehaviorSubject<Ingredient[]>([]);
  $pantryState = this.$pantry.asObservable();

  addIngredient(ingredient : Ingredient) : void {
    if (this.ingredients.some(existing => existing.name === ingredient.name)) return
    this.ingredients.push(ingredient);
    this.$pantry.next(this.ingredients);
  }

  removeIngredient(ingredient : Ingredient) : void {
    const index = this.ingredients.indexOf(ingredient);
    if (index > -1) {
      this.ingredients.splice(index, 1);
      this.$pantry.next(this.ingredients);
    }
  }

  constructor() { }
}
