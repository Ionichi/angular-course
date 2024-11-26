import { Component, Renderer2 } from "@angular/core";

@Component({
	selector: "app-mahasiswa",
	standalone: true,
	imports: [],
	templateUrl: "./mahasiswa.component.html",
	styleUrl: "./mahasiswa.component.css",
})
export class MahasiswaComponent {
	constructor(private renderer: Renderer2) {
		this.renderer.removeClass(document.body, "sidebar-open");
		this.renderer.addClass(document.body, "sidebar-closed");
		this.renderer.addClass(document.body, "sidebar-collapse");
		this.renderer.addClass(document.body, "sidebar-mini");
	}
}
