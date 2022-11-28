import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHeroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class GetHeroService {

  constructor(
    private httpClient: HttpClient
    ) { }

    getHeroe():Observable<IHeroe>{
      return this.httpClient.get<IHeroe>('https://videojuego-b7904-default-rtdb.firebaseio.com/personajes/Heroe.json');
    }
}
