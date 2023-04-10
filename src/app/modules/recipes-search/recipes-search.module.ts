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
import {NgxSliderModule} from "@angular-slider/ngx-slider";
import { CuisinesSelectionComponent } from './cuisines-selection/cuisines-selection.component';
import {MatDialogModule} from "@angular/material/dialog";
import { MealTypeSelectionComponent } from './meal-type-selection/meal-type-selection.component';
import {HttpClientModule} from "@angular/common/http";
import { RecipeCardComponent } from './recipe-card/recipe-card.component';


@NgModule({
    declarations: [
        IngredientsMenuComponent,
        FiltersComponent,
        RecipesOverviewComponent,
        HomeComponent,
        CuisinesSelectionComponent,
        MealTypeSelectionComponent,
        RecipeCardComponent
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
    MatCheckboxModule,
    NgxSliderModule,
    MatDialogModule,
    HttpClientModule
  ]
})
export class RecipesSearchModule { }
