import { HttpClient } from "@angular/common/http";
import { Component, inject, Renderer2 } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

declare const $: any;

@Component({
	selector: "app-login",
	standalone: true,
	imports: [RouterModule],
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.css",
})
export class LoginComponent {
	constructor(
		private renderer: Renderer2,
		private router: Router,
		private http: HttpClient,
		private cookieService: CookieService,
	) {
		// Renderer2 adalah pengganti JQuery dari AngularJS
		this.renderer.addClass(document.body, "login-page");
		// this.renderer.setAttribute(document.body, "style", "min-height: 464px;");
	}

	email = "feryandi@stmikpontianak.ac.id";
	password = "1234567890";

	showPeringatanModal(message: string): void {
		$("#peringatanModal").modal("show");
		$("#pm_message").html(message);
	}

	signIn(): void {
		console.log("Signing in...");

		let userId = $("#idText").val();
		userId = encodeURIComponent(userId);

		let password = $("#passwordText").val();
		password = encodeURIComponent(password);

		const url = "https://stmikpontianak.cloud/011100862/login.php?" + "id=" + userId + "&password=" + password;

		this.http.get(url).subscribe((data: any) => {
			console.log(data);

			const row = data[0];

			if (row.idCount != 1) {
				this.showPeringatanModal("Id atau password tidak cocok");
				return;
			}

			this.cookieService.set("userId", userId);

			console.log("Cookie data berhasil dibuat...");

			this.router.navigate(["/dashboard"]);
		});
	}
}
