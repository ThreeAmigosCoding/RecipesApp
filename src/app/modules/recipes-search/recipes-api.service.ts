import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recipe} from "./recipes-overview/recipes-overview.component";
import {APIKey} from "../../../keys/recipesAPIKey";

@Injectable({
  providedIn: 'root'
})
export class RecipesApiService {

  constructor(private http : HttpClient) { }

  private prepareFilters(searchFilter : SearchFilter) : HttpParams {
    let params : HttpParams = new HttpParams();

    if (searchFilter.includeIngredients !== "")
      params = params.set("includeIngredients", searchFilter.includeIngredients);
    if (searchFilter.excludeIngredients !== "")
      params = params.set("excludeIngredients", searchFilter.excludeIngredients);
    if (searchFilter.maxReadyTime !== -1)
      params = params.set("maxReadyTime", searchFilter.maxReadyTime);
    if (searchFilter.minCalories !== -1)
      params = params.set("minCalories", searchFilter.minCalories);
    if (searchFilter.maxCalories !== -1)
      params = params.set("maxCalories", searchFilter.maxCalories);
    if (searchFilter.intolerances !== "")
      params = params.set("intolerances", searchFilter.intolerances);
    params = params.set("addRecipeInformation", true);
    params = params.set("apiKey", APIKey)
    params = params.set("number", 10)

    return params;
  }

  public getRecipes(searchFilter : SearchFilter) : Observable<RecipesResults> {
    let params = this.prepareFilters(searchFilter);
    console.log(params)
    return this.http.get<RecipesResults>("https://api.spoonacular.com/recipes/complexSearch", {params});
  }

  public getRecipeDetails(recipeId: number): Observable<Recipe>{
    let params : HttpParams = new HttpParams();
    params = params.set("apiKey", APIKey);
    return this.http.get<Recipe>("https://api.spoonacular.com/recipes/"+ recipeId +"/information", {params});
  }

}

export interface SearchFilter {
  includeIngredients: string;
  excludeIngredients: string;
  maxReadyTime: number;
  minCalories: number;
  maxCalories: number;
  intolerances: string;
}

export interface RecipesResults {
  results: Recipe[],
  number: number,
  offset: number,
  totalResults: number
}
