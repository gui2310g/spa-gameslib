import { Component } from "@angular/core";
import { GamesListsComponent } from "../../components/gameslists/gameslists.component";
import { GameComponent } from "../../components/game/game.component";
import { AccordionModule } from 'primeng/accordion'
import { GameService } from "../../services/gameservice/gameservice.service";
import { Genres, Platforms, Publishers } from "../../models/game.model";

@Component({
    selector: "app-gamepage",
    templateUrl: "./gamesSearch.component.html",
    styleUrl: "./gamesSearch.component.scss",
    standalone: true,
    imports: [GamesListsComponent, GameComponent, AccordionModule]
})
export class GamesSearchComponent {
    genres: Genres[] = [];
    platforms: Platforms[] = [];
    publishers: Publishers[] = [];

    page: number = 0;
    size: number = 20;
    header: string = '';

    constructor(private gameService: GameService) {}

    ngOnInit() : void { 
        this.LoadGenres();
        this.LoadPlatforms();
        this.LoadPublishers();
    }

    LoadGenres(): void {
        this.gameService.getGenres(this.page, this.size).subscribe({
            next: (data) => this.genres = data.content,
            error: (error) => console.error("Error by finding genres", error),
            complete: () => console.log("Genres loaded successfully")
        })
    }

    LoadPlatforms(): void {
        this.gameService.getPlatforms(this.page, this.size).subscribe({
            next: (data) => this.platforms = data.content,
            error: (error) => console.error("Error by finding platforms", error),
            complete: () => console.log("Platforms loaded succesfully")
        })     
    }
    
    LoadPublishers(): void {
        this.gameService.getPublishers(this.page, this.size).subscribe({
            next: (data) => this.publishers = data.content,
            error: (error) => console.error("Error by finding publishers", error),
            complete: () => console.log("Publishers loaded succesfully")
        })
    }
}