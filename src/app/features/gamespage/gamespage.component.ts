import { Component } from "@angular/core";
import { GamesListsComponent } from "../../components/gameslists/gameslists.component";
import { MatDivider } from "@angular/material/divider";
@Component({
    selector: "app-gamepage",
    templateUrl: "./gamespage.component.html",
    styleUrl: "./gamespage.component.scss",
    standalone: true,
    imports: [GamesListsComponent, MatDivider]
})
export class GamesPageComponent {
}