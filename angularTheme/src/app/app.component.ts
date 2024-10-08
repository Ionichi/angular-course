import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {
	title = "angularTheme";
	email = "feryandi@stmikpontianak.ac.id";
	name = "Feryandi";
	nim = "222102476";
}
