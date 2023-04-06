import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-overview',
  templateUrl: './recipes-overview.component.html',
  styleUrls: ['./recipes-overview.component.css']
})
export class RecipesOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Cuisines - https://spoonacular.com/food-api/docs#Cuisines
  // Meal Types - https://spoonacular.com/food-api/docs#Meal-Types

  cuisines = ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European",
    "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean",
    "Latin American", "Mediterranean", "Mexican","Middle Eastern", "Nordic", "Southern", "Spanish", "Thai",
    "Vietnamese"]

  mealTypes = ["main course", "bread", "marinade", "side dish", "breakfast", "fingerfood", "dessert", "soup", "snack",
               "appetizer", "beverage", "drink", "salad", "sauce"];

  chooseCuisine() {

  }

  chooseMealType() {

  }
}
