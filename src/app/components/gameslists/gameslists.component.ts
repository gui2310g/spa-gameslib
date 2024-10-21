import { Component, OnInit } from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { MatDivider } from "@angular/material/divider";
import { PaginatorModule } from "primeng/paginator";
import { AccordionModule } from 'primeng/accordion'
import { GameService } from "../../services/gameservice/gameservice.service";

interface List {
    id: number,
    name: string
}

@Component({
    selector: "app-gameslists",
    templateUrl: "./gameslists.component.html",
    styleUrl: "./gameslists.component.scss",
    standalone: true,
    imports: [MatIcon, MatDivider, PaginatorModule, AccordionModule] 
})  
export class GamesListsComponent implements OnInit {
    activeIndex: number | number[] = 0; 
    lists: List[] = [];
    page: number = 0;
    size: number = 6;
    header: string = '';

    constructor(private gameService: GameService) {}

    ngOnInit() : void { this.LoadGenres; }

    LoadGenres(): void {
        this.gameService.getGenres(this.page, this.size).subscribe({
            next: (data) => this.lists = data.content,
            error: (error) => console.error("Error by finding genres", error),
            complete: () => console.log("Genres loaded successfully")
        })
    }


    AccordionTabOpenEvent(event: any) {
        this.activeIndex = event.index;
        this.header = this.lists[event.index].name || "";
    }

    AccordionTabCloseEvent(event: any) {
        this.activeIndex = -1;
        this.header = '';
    }
}