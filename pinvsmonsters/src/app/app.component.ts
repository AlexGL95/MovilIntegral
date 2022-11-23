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
      icono: '../assets/icons/pin.gif',
      nombre:'Inicio',
      ruta:'/principal',
    },
    {
      icono: '../assets/icons/skeleton.gif',
      nombre:'Enemigos',
      ruta:'/enemigos',
    },
    {
      icono: '../assets/icons/secretos.gif',
      nombre:'Secretos',
      ruta:'/secretos',
    },
];

  constructor() {}
}
