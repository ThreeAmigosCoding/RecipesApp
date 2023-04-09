import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {RecipesSearchService} from "../recipes-search.service";

@Component({
  selector: 'app-cuisines-selection',
  templateUrl: './cuisines-selection.component.html',
  styleUrls: ['./cuisines-selection.component.css']
})
export class CuisinesSelectionComponent implements OnInit {

  selectedCuisinesCount: number = 0;

  cuisines = ["African", "American", "British", "Caribbean", "Chinese", "Eastern European", "European",
    "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean",
    "Latin American", "Mediterranean", "Mexican","Middle Eastern", "Nordic", "Spanish", "Thai",
    "Vietnamese"]



  cuisinesSelection: Cuisine[] = this.cuisines.map(cuisine => ({
    name: cuisine,
    selected: false
  }));

  constructor(public dialogRef: MatDialogRef<CuisinesSelectionComponent>,
              private recipesSearchService: RecipesSearchService) { }

  ngOnInit(): void {
    this.recipesSearchService.$cuisinesState.subscribe(result => {
      if (result.length !== 0){
        this.cuisinesSelection = JSON.parse(JSON.stringify(result));
        for (let cuisine of this.cuisinesSelection){
          if (cuisine.selected) this.selectedCuisinesCount++;
        }
      }
    })
  }

  caseRegulator(): string{
    if (this.selectedCuisinesCount === 1) return "cuisine";
    return "cuisines";
  }

  onCloseClick(): void{
    this.dialogRef.close();
  }

  clearAll(): void{
    this.cuisinesSelection = this.cuisines.map(cuisine => ({
      name: cuisine,
      selected: false
    }));

    let newCuisines = JSON.parse(JSON.stringify(this.cuisinesSelection));
    this.recipesSearchService.setCuisines(newCuisines);

    this.selectedCuisinesCount = 0;
  }

  changeCuisineCount(cuisine: Cuisine): void{
    if (cuisine.selected){
      this.selectedCuisinesCount++;
    } else {
      this.selectedCuisinesCount--;
    }
  }

  apply(): void{
    let newCuisines = JSON.parse(JSON.stringify(this.cuisinesSelection));
    this.recipesSearchService.setCuisines(newCuisines);
    this.dialogRef.close();
  }

}

export interface Cuisine{
  name: string,
  selected:boolean
}
