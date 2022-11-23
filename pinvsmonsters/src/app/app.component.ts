import { Component } from '@angular/core';
import { Elemento } from './interfaces/elemento.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  elementos: Elemento[] = [
    {
      icono: 'people-outline',
      nombre:'Inicio',
      ruta:'/principal',
    },
    {
      icono: 'newspaper-outline',
      nombre:'Enemigos',
      ruta:'/enemigos',
    },
    {
      icono: 'cog-outline',
      nombre:'Secretos',
      ruta:'/secretos',
    },
];

  constructor() {}
}
