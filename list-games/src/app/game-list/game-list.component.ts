import { Component, OnInit } from '@angular/core';
import { GameService } from '../shared/services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: object[]

  constructor(private gameService: GameService) {
    this.games = []
  }

  ngOnInit(): void {
    //Retrieve the games list
    this.gameService.getApi().subscribe(gamesList =>{
      this.games = gamesList
      console.log(this.games)
    })
  }

}
