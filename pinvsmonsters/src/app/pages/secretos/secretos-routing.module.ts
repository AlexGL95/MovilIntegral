import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecretosPage } from './secretos.page';

const routes: Routes = [
  {
    path: '',
    component: SecretosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecretosPageRoutingModule {}
