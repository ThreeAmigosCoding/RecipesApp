import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Ingredient} from "./filters/filters.component";
import {Cuisine} from "./cuisines-selection/cuisines-selection.component";
import {MealType} from "./meal-type-selection/meal-type-selection.component";
import {Recipe} from "./recipes-overview/recipes-overview.component";

@Injectable({
  providedIn: 'root'
})
export class RecipesSearchService {

  //region Ingredients
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
  //endregion

  //region Cuisines

  private $cuisines = new BehaviorSubject<Cuisine[]>([]);
  $cuisinesState = this.$cuisines.asObservable();

  setCuisines(cuisines: Cuisine[]): void{
    this.$cuisines.next(cuisines);
  }

  //endregion

  //region Meal Types

  private $mealTypes = new BehaviorSubject<MealType[]>([]);
  $mealTypesState = this.$mealTypes.asObservable();

  setMealTypes(mealTypes: MealType[]): void {
    this.$mealTypes.next(mealTypes);
  }

  //endregion

  // region Recipes

  private $recipes = new BehaviorSubject<Recipe[]>([])
  $recipesState = this.$recipes.asObservable();

  setRecipesState(recipes: Recipe[]): void {
    this.$recipes.next(recipes);
  }

  // endregion

  constructor() { }
}
