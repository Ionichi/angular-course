import { Component, Input } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Component({
	selector: "app-sidebar",
	standalone: true,
	imports: [RouterModule],
	templateUrl: "./sidebar.component.html",
	styleUrl: "./sidebar.component.css",
})
export class SidebarComponent {
	@Input() moduleName: string = "";

	constructor(
		private cookieService: CookieService,
		private router: Router,
	) {}

	signOut(): void {
		this.cookieService.delete("userId");
		console.log("Cookie data berhasil dihapus...");
		this.router.navigate(["/login"]);
	}
}
