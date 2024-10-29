import { Component, OnInit, Renderer2 } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
	selector: "app-login",
	standalone: true,
	imports: [RouterModule],
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.css",
})
export class LoginComponent {
	constructor(private renderer: Renderer2) {
		// Renderer2 adalah pengganti JQuery dari AngularJS
		this.renderer.addClass(document.body, "login-page");
		// this.renderer.setAttribute(document.body, "style", "min-height: 464px;");
	}

	email = "feryandi@stmikpontianak.ac.id";
	password = "1234567890";
}
