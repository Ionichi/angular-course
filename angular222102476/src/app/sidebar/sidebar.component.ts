import { AfterViewInit, Component, Input } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

declare const $: any;

@Component({
	selector: "app-sidebar",
	standalone: true,
	imports: [RouterModule],
	templateUrl: "./sidebar.component.html",
	styleUrl: "./sidebar.component.css",
})
export class SidebarComponent implements AfterViewInit {
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

	ngAfterViewInit(): void {
		$("#username").text(this.cookieService.get("userId"));
	}
}
