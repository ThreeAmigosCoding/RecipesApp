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

  recipes: Recipe[] = [
    {
      "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
      "preparationTime": 30,
      "mealType": "Dinner",
      "cuisine": "Italian",
      "calories": 700
    },
    {
      "title": "Veggie Stir Fry",
      "preparationTime": 20,
      "mealType": "Lunch",
      "cuisine": "Asian",
      "calories": 500
    },
    {
      "title": "Beef Chili",
      "preparationTime": 60,
      "mealType": "Dinner",
      "cuisine": "American",
      "calories": 800
    },
    {
      "title": "Pesto Pasta",
      "preparationTime": 25,
      "mealType": "Lunch",
      "cuisine": "Italian",
      "calories": 600
    },
    {
      "title": "Fish Tacos",
      "preparationTime": 35,
      "mealType": "Dinner",
      "cuisine": "Mexican",
      "calories": 550
    },
    {
      "title": "Beef Chili",
      "preparationTime": 60,
      "mealType": "Dinner",
      "cuisine": "American",
      "calories": 800
    },
    {
      "title": "Pesto Pasta",
      "preparationTime": 25,
      "mealType": "Lunch",
      "cuisine": "Italian",
      "calories": 600
    },
    {
      "title": "Fish Tacos",
      "preparationTime": 35,
      "mealType": "Dinner",
      "cuisine": "Mexican",
      "calories": 550
    }
  ]

  searchToken: string = "";

  chooseCuisine() {
    this.cuisinesDialog.open(CuisinesSelectionComponent);
  }

  chooseMealType() {
    this.mealTypesDialog.open(MealTypeSelectionComponent);
  }

  titleContainsToken(title: string): boolean{
    if (this.searchToken.trim() === "") return true;
    return title.toLowerCase().includes(this.searchToken.trim().toLowerCase());
  }
}

export interface Recipe {
  title: string,
  preparationTime: number,
  mealType: string,
  cuisine: string,
  calories: number
}
