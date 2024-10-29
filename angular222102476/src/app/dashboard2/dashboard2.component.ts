import { Component, Renderer2 } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
	selector: "app-dashboard2",
	standalone: true,
	imports: [HeaderComponent, SidebarComponent, FooterComponent, RouterModule],
	templateUrl: "./dashboard2.component.html",
	styleUrl: "./dashboard2.component.css",
})
export class Dashboard2Component {
	constructor(private renderer: Renderer2) {
		this.renderer.addClass(document.body, "dark-mode");

		this.renderer.removeClass(document.body, "sidebar-open");
		this.renderer.addClass(document.body, "sidebar-closed");
		this.renderer.addClass(document.body, "sidebar-collapse");
		this.renderer.addClass(document.body, "sidebar-mini");
	}
}
