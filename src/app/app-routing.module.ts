import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IngredientsMenuComponent} from "./modules/recipes-search/ingredients-menu/ingredients-menu.component";
import {FiltersComponent} from "./modules/recipes-search/filters/filters.component";
import {RecipesOverviewComponent} from "./modules/recipes-search/recipes-overview/recipes-overview.component";

const routes: Routes = [
  {path: 'ingredients-menu', component: IngredientsMenuComponent},
  {path: 'filters', component: FiltersComponent},
  {path: 'recipes-overview', component: RecipesOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
