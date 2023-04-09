import { Component, OnInit } from '@angular/core';
import {RecipesSearchService} from "../recipes-search.service";
import {Options} from "@angular-slider/ngx-slider";

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

  prepSliderValueDisplay: number = 120;
  prepSliderValue: number = 50;
  prepSliderOptions: Options = {
    floor: 0,
    ceil: 120,
    step: 5
  };

  glutenIntolerance: boolean = false;

  //slider for cals
  calSliderMinValue: number = 20;
  calSliderMinValueDisplay: number = 20;
  calSliderMaxValue: number = 200;
  calSliderMaxValueDisplay: number = 200;
  calSliderOptions: Options = {
    floor: 0,
    ceil: 200,
    step: 10
  };

  remove(ingredient : Ingredient) : void {
    this.recipesSearchService.removeIngredient(ingredient);
  }


}

export interface Ingredient {
  name: string;
  excluded: boolean;
}

