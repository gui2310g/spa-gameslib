import { Component } from "@angular/core";
import { GamesListsComponent } from "../../components/gameslists/gameslists.component";
import { GameComponent } from "../../components/game/game.component";
import { MatIcon } from "@angular/material/icon";
import { MatButton } from "@angular/material/button";
@Component({
    selector: "app-gamepage",
    templateUrl: "./gamespage.component.html",
    styleUrl: "./gamespage.component.scss",
    standalone: true,
    imports: [GamesListsComponent, MatIcon, MatButton, GameComponent]
})
export class GamesPageComponent {
}