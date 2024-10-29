import { Component, Renderer2 } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
	selector: "app-register",
	standalone: true,
	imports: [RouterModule],
	templateUrl: "./register.component.html",
	styleUrl: "./register.component.css",
})
export class RegisterComponent {
	constructor(private renderer: Renderer2) {
		// Renderer2 adalah pengganti JQuery dari AngularJS
		this.renderer.addClass(document.body, "register-page");
		// this.renderer.setAttribute(document.body, "style", "min-height: 464px;");
	}
	name = "Feryandi (222102476)";
	email = "feryandi@stmikpontianak.ac.id";
	password = "1234567890";
}
