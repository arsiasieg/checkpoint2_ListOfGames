import { Component, OnInit } from '@angular/core';
import { GameService } from '../shared/services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: any[]

  constructor(private gameService: GameService) {
    this.games = []
   }

  ngOnInit(): void {
    this.gameService.getApi().subscribe(games =>{
      this.games = games
      console.log(games)
    })
  }

}
