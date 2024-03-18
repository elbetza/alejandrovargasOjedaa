import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaPokemonPage } from './agenda-pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaPokemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaPokemonPageRoutingModule {}
