import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from './favourite/favourite.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [

  {
    path:'favourite',
    component:FavouriteComponent
  },
  {
path:'search',
component:SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// src/app/pokemon.service.ts

