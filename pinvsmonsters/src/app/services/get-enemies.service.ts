import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEnemy } from '../interfaces/enemy.interface';

@Injectable({
  providedIn: 'root'
})
export class GetEnemiesService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getEnemies():Observable<IEnemy[]>{
    return this.httpClient.get<IEnemy[]>('https://videojuego-b7904-default-rtdb.firebaseio.com/personajes/Enemigos.json');
  }

  getEnemy(id: number):Observable<IEnemy>{
    return this.httpClient.get<IEnemy>(`https://videojuego-b7904-default-rtdb.firebaseio.com/personajes/Enemigos/${id}.json`);
  }

}
