import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CulturageneralPage } from './culturageneral.page';

const routes: Routes = [
  {
    path: '',
    component: CulturageneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CulturageneralPageRoutingModule {}
