import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaPokemonPageRoutingModule } from './agenda-pokemon-routing.module';

import { AgendaPokemonPage } from './agenda-pokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaPokemonPageRoutingModule
  ],
  declarations: [AgendaPokemonPage]
})
export class AgendaPokemonPageModule {}
