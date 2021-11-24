import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  public getApi(): Observable<any>{
    return this.http.get<any>('https://apis.wilders.dev/wild-games/games')
  }
}
