import { Component } from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { MatDivider } from "@angular/material/divider";
export interface Label {
    id: number,
    name: string
}

@Component({
    selector: "app-gameslists",
    templateUrl: "./gameslists.component.html",
    styleUrl: "./gameslists.component.scss",
    standalone: true,
    imports: [MatIcon, MatDivider]
})  
export class GamesListsComponent {
    labels: Label[] = [
        { id: 0, name: "Genres "},
        { id: 1, name: "Platforms" },
        { id: 2, name: "Publishers" }
    ];
}