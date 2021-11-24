import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../shared/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  selectValue: any
  gamesByGenre: any[]|undefined
  @Input() gamesList: any[]|undefined

  constructor(private gameService: GameService) {
    this.selectValue = "Action"
   }

  ngOnInit(): void {
  }

  //Retrieve the game by their genres
  showSelectValue(genre:any){
    this.gamesList = this.gameService.selectByGenre(genre)
    console.log(this.gamesList)
  }
}
