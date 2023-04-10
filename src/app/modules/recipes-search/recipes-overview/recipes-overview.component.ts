import {Component, OnInit} from '@angular/core';

import {MatDialog} from "@angular/material/dialog";
import {Cuisine, CuisinesSelectionComponent} from "../cuisines-selection/cuisines-selection.component";
import {RecipesSearchService} from "../recipes-search.service";
import {MealType, MealTypeSelectionComponent} from "../meal-type-selection/meal-type-selection.component";

@Component({
  selector: 'app-recipes-overview',
  templateUrl: './recipes-overview.component.html',
  styleUrls: ['./recipes-overview.component.css']
})
export class RecipesOverviewComponent implements OnInit {

  constructor(public cuisinesDialog: MatDialog, private recipesSearchService: RecipesSearchService,
              public mealTypesDialog: MatDialog) { }

  ngOnInit(): void {
    this.recipesSearchService.$cuisinesState.subscribe(result => {
      this.selectedCuisines = JSON.parse(JSON.stringify(result));
    });

    this.recipesSearchService.$mealTypesState.subscribe(result => {
      this.selectedMealTypes = JSON.parse(JSON.stringify(result));
    });
    this.recipesSearchService.$recipesState.subscribe(result => {
      this.recipes = result;
    });
  }

  // Cuisines - https://spoonacular.com/food-api/docs#Cuisines
  // Meal Types - https://spoonacular.com/food-api/docs#Meal-Types

  selectedCuisines: Cuisine[] = [];
  selectedMealTypes: MealType[] = [];

  recipes: Recipe[] = []

  searchToken: string = "";

  chooseCuisine() {
    this.cuisinesDialog.open(CuisinesSelectionComponent);
  }

  chooseMealType() {
    this.mealTypesDialog.open(MealTypeSelectionComponent);
  }

  containsCriteria(recipe: Recipe): boolean{
    if (this.searchToken.trim() !== "" && !recipe.title.toLowerCase().includes(this.searchToken.trim().toLowerCase()))
      return false;

    let cuisines: string[] = this.selectedCuisines
      .filter(cuisine => cuisine.selected)
      .map(cuisine => cuisine.name);
    if (cuisines.length !== 0 && !cuisines.some(cuisine => recipe.cuisines.includes(cuisine)))
      return false;

    let mealTypes: string[] = this.selectedMealTypes
      .filter(mealType => mealType.selected)
      .map(mealType => mealType.name);
    if (mealTypes.length !== 0 && !mealTypes.some(mealType => recipe.dishTypes.includes(mealType)))
      return false;

    return true;
  }
}

export interface Recipe {
  id: number,
  glutenFree: boolean,
  title: string,
  readyInMinutes: number,
  dishTypes: string[],
  cuisines: string[],
  calories: number,
  image: string,
  servings: number,
  summary: string,
  winePairing: WinePairing,
  steps: Instruction,
  extendedIngredients: ExtendedIngredient[]
}

export interface WinePairing {
  pairedWines: string[],
  pairingText: string
}

export interface Instruction {
  name: string,
  steps: Step[]
}

export interface Step {
  number: number,
  step: string
}

export interface ExtendedIngredient {
  name: string,
  original: string
}
