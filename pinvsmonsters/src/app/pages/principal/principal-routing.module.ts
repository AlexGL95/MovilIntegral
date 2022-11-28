import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { PrincipalPage } from './principal.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    IonicModule
  ],
  exports: [RouterModule],
})
export class PrincipalPageRoutingModule {}
