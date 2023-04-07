import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsMenuComponent } from './ingredients-menu/ingredients-menu.component';
import { FiltersComponent } from './filters/filters.component';
import { RecipesOverviewComponent } from './recipes-overview/recipes-overview.component';
import { HomeComponent } from './home/home.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSliderModule} from "@angular/material/slider";
import {FormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";




@NgModule({
    declarations: [
        IngredientsMenuComponent,
        FiltersComponent,
        RecipesOverviewComponent,
        HomeComponent
    ],
  exports: [
    HomeComponent,
    IngredientsMenuComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    FormsModule,
    MatCheckboxModule
  ]
})
export class RecipesSearchModule { }
