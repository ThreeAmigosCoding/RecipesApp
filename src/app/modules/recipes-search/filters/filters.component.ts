import {Component, OnInit} from '@angular/core';
import {RecipesSearchService} from "../recipes-search.service";
import {Options} from "@angular-slider/ngx-slider";
import {RecipesApiService, SearchFilter} from "../recipes-api.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  pantry : Ingredient[] = [{name: "orange", excluded: true}, {name: "meat", excluded: false}];

  constructor(private recipesSearchService: RecipesSearchService, private recipesApiService: RecipesApiService) { }

  ngOnInit(): void {
    this.recipesSearchService.$pantryState.subscribe( result => {
      this.pantry = result;
    } )
  }

  prepSliderValue: number = 300;
  prepSliderOptions: Options = {
    floor: 0,
    ceil: 300,
    step: 5
  };

  glutenIntolerance: boolean = false;

  //slider for cals
  calSliderMinValue: number = 0;
  calSliderMaxValue: number = 2000;
  calSliderOptions: Options = {
    floor: 0,
    ceil: 2000,
    step: 10
  };

  remove(ingredient : Ingredient) : void {
    this.recipesSearchService.removeIngredient(ingredient);
  }

  private prepareFilters(): SearchFilter {
    let includeIngredients = [];
    let excludeIngredients = [];
    for (let ingredient of this.pantry) {
      if (ingredient.excluded) excludeIngredients.push(ingredient.name);
      else includeIngredients.push(ingredient.name);
    }

    let maxReadyTime: number = this.prepSliderValue;
    let minCalories: number = this.calSliderMinValue;
    let maxCalories: number = this.calSliderMaxValue;
    let intolerances: string = "";
    if (this.glutenIntolerance) intolerances = "gluten"

    return {
      excludeIngredients: excludeIngredients.join(','),
      includeIngredients: includeIngredients.join(','),
      intolerances: intolerances,
      maxCalories: maxCalories,
      maxReadyTime: maxReadyTime,
      minCalories: minCalories
    };

  }

  public getRecipes() : void {
    this.recipesApiService.getRecipes(this.prepareFilters()).subscribe(result => {
      this.recipesSearchService.setRecipesState(result.results);
    })
  }

}

export interface Ingredient {
  name: string;
  excluded: boolean;
}

