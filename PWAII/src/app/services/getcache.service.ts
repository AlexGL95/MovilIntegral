import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CacheBuster } from 'ngx-cacheable';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetcacheService {

  constructor(
    private httpService: HttpClient
  ) { }

  @CacheBuster()
  getimg():Observable<string>{
    return this.httpService.get<string>('https://videojuego-b7904-default-rtdb.firebaseio.com/personajes/Heroe/iconoDanno.json');
  }
}
