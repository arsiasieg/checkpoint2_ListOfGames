import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService{
  allGames: any[]
  gamesByGenre: any[]

  constructor(private http: HttpClient) {
    this.allGames = []
    this.gamesByGenre = []
    this.getApi().subscribe (games =>{
      this.allGames = games
    })
   }
   
  //Retrieve all game of API in games array
  public getApi(): Observable<any>{
    return this.http.get<any>('https://apis.wilders.dev/wild-games/games')
  }

  //Retrieve the game by their genres
  public selectByGenre(genreSelect :any){
    if(genreSelect ==="All"){
      return this.allGames
    } else {
      this.gamesByGenre = []
      this.allGames.filter(game => {
        game.genres.forEach((genre:any) =>{
          if (genre.name === genreSelect){
            this.gamesByGenre.push(game)
          }
        })
      })
      return this.gamesByGenre
    }
  }
}
