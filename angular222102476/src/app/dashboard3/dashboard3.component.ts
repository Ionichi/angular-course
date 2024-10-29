import { Component, Renderer2 } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "../footer/footer.component";

@Component({
	selector: "app-dashboard3",
	standalone: true,
	imports: [HeaderComponent, SidebarComponent, FooterComponent, RouterModule],
	templateUrl: "./dashboard3.component.html",
	styleUrl: "./dashboard3.component.css",
})
export class Dashboard3Component {
	constructor(private renderer: Renderer2) {
		this.renderer.removeClass(document.body, "dark-mode");

		this.renderer.removeClass(document.body, "sidebar-open");
		this.renderer.addClass(document.body, "sidebar-closed");
		this.renderer.addClass(document.body, "sidebar-collapse");
		this.renderer.addClass(document.body, "sidebar-mini");
	}
}
