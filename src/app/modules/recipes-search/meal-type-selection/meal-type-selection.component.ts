import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {RecipesSearchService} from "../recipes-search.service";

@Component({
  selector: 'app-meal-type-selection',
  templateUrl: './meal-type-selection.component.html',
  styleUrls: ['./meal-type-selection.component.css']
})
export class MealTypeSelectionComponent implements OnInit {

  selectedMealTypesCount: number = 0;

  mealTypes = ["main course", "bread", "marinade", "side dish", "breakfast", "fingerfood", "dessert", "soup", "snack",
    "appetizer", "beverage", "drink", "salad", "sauce"];

  mealTypesSelection: MealType[] = this.mealTypes.map(mealType => ({
    name: mealType,
    selected: false
  }));

  constructor(public dialogRef: MatDialogRef<MealTypeSelectionComponent>,
              private recipesSearchService: RecipesSearchService) { }

  ngOnInit(): void {
    this.recipesSearchService.$mealTypesState.subscribe(result => {
      if (result.length !== 0){
        this.mealTypesSelection = JSON.parse(JSON.stringify(result));
        for (let mealType of this.mealTypesSelection){
          if (mealType.selected) this.selectedMealTypesCount++;
        }
      }
    });
  }

  caseRegulator(): string{
    if (this.selectedMealTypesCount === 1) return "meal type";
    return "meal types";
  }

  onCloseClick(): void{
    this.dialogRef.close();
  }

  clearAll(): void {
    this.mealTypesSelection = this.mealTypes.map(mealType => ({
      name: mealType,
      selected: false
    }));

    let newMealTypes = JSON.parse(JSON.stringify(this.mealTypesSelection));
    this.recipesSearchService.setMealTypes(newMealTypes);

    this.selectedMealTypesCount = 0;
  }

  changeMealTypeCount(mealType: MealType): void {
    if (mealType.selected){
      this.selectedMealTypesCount++;
    } else {
      this.selectedMealTypesCount--;
    }
  }

  apply(): void {
    let newMealTypes = JSON.parse(JSON.stringify(this.mealTypesSelection));
    this.recipesSearchService.setMealTypes(newMealTypes);
    this.dialogRef.close();
  }

}

export interface MealType{
  name: string,
  selected:boolean
}
