import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Recipe} from "../recipes-overview/recipes-overview.component";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {


  constructor(private dialogRef: MatDialogRef<RecipeCardComponent>,
    @Inject(MAT_DIALOG_DATA) public recipe: Recipe ) {
  }


  ngOnInit(): void {
  }


  onCloseClick(): void {
    this.dialogRef.close();
  }

}
