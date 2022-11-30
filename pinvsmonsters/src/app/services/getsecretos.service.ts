import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISecreto } from '../interfaces/secret.interface';

@Injectable({
  providedIn: 'root'
})
export class GetsecretosService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getSecrets():Observable<ISecreto[]>{
    return this.httpClient.get<ISecreto[]>('https://videojuego-b7904-default-rtdb.firebaseio.com/secretos.json');
  }

  getSecret(id: number){
    return this.httpClient.get<ISecreto>(`https://videojuego-b7904-default-rtdb.firebaseio.com/secretos/${id}.json`);
  }
}
