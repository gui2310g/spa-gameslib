import { Component } from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { MatDivider } from "@angular/material/divider";
import { PaginatorModule } from "primeng/paginator";
import { AccordionModule } from 'primeng/accordion'

export interface Label {
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
export class GamesListsComponent {
    
    activeIndex: number | number[] = 0;
    header: string = '';

    labels: Label[] = [
        { id: 0, name: "Genres "},
        { id: 1, name: "Platforms" },
        { id: 2, name: "Publishers" }
    ];

    AccordionTabOpenEvent(event: any) {
        this.activeIndex = event.index;
        this.header = this.labels[event.index].name || "";
    }

    AccordionTabCloseEvent(event: any) {
        this.activeIndex = -1;
        this.header = '';
    }
}