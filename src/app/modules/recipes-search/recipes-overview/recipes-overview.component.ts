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
  }

  // Cuisines - https://spoonacular.com/food-api/docs#Cuisines
  // Meal Types - https://spoonacular.com/food-api/docs#Meal-Types

  selectedCuisines: Cuisine[] = [];
  selectedMealTypes: MealType[] = [];

  searchToken: string = "";

  chooseCuisine() {
    this.cuisinesDialog.open(CuisinesSelectionComponent);
  }

  chooseMealType() {
    this.mealTypesDialog.open(MealTypeSelectionComponent);
  }
}
