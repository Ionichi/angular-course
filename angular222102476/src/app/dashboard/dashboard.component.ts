import { Component, Renderer2 } from "@angular/core";
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterModule } from "@angular/router";

@Component({
	selector: "app-dashboard",
	standalone: true,
	imports: [HeaderComponent, SidebarComponent, FooterComponent, RouterModule],
	templateUrl: "./dashboard.component.html",
	styleUrl: "./dashboard.component.css",
})
export class DashboardComponent {
	constructor(private renderer: Renderer2) {
		this.renderer.removeClass(document.body, "login-page");
		this.renderer.removeClass(document.body, "register-page");
		this.renderer.removeClass(document.body, "dark-mode");

		this.renderer.removeClass(document.body, "sidebar-open");
		this.renderer.addClass(document.body, "sidebar-closed");
		this.renderer.addClass(document.body, "sidebar-collapse");
		this.renderer.addClass(document.body, "sidebar-mini");
	}

	nim: string = "222102476";
	nama: string = "Feryandi";
}
