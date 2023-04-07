import { Component, OnInit } from '@angular/core';
import {RecipesSearchService} from "../recipes-search.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  pantry : Ingredient[] = [{name: "orange", excluded: true}, {name: "meat", excluded: false}];

  constructor(private recipesSearchService: RecipesSearchService) { }

  ngOnInit(): void {
    this.recipesSearchService.$pantryState.subscribe( result => {
      this.pantry = result;
    } )
  }

  prepSliderValue: number = 120;
  glutenIntolerance: boolean = false;

  //TODO Fix range slider for calories.
  minValue = 0;
  maxValue = 100;
  sliderValue = {min: 20, max: 80};

  remove(ingredient : Ingredient) : void {
    this.recipesSearchService.removeIngredient(ingredient);
  }

}

export interface Ingredient {
  name: string;
  excluded: boolean;
}

