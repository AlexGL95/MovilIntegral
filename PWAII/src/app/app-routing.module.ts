import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescargarComponent } from './pages/descargar/descargar.component';
import { EnemigosComponent } from './pages/enemigos/enemigos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PrincipalComponent } from './pages/principal/principal.component';

const routes: Routes = [
  {
    path:'inicio',
    component:PrincipalComponent
  },
  {
    path:'enemigos',
    component:EnemigosComponent
  },
  {
    path:'descargar',
    component:DescargarComponent
  },
  {
    path:'**',
    redirectTo:'inicio',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
