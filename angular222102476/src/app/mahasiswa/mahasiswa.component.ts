import { AfterViewInit, Component, Renderer2 } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { FooterComponent } from "../footer/footer.component";
import { HttpClient } from "@angular/common/http";

declare const $: any;

@Component({
	selector: "app-mahasiswa",
	standalone: true,
	imports: [HeaderComponent, SidebarComponent, FooterComponent],
	templateUrl: "./mahasiswa.component.html",
	styleUrl: "./mahasiswa.component.css",
})
export class MahasiswaComponent implements AfterViewInit {
	table1: any;
	data: any;

	constructor(
		private http: HttpClient,
		private renderer: Renderer2,
	) {
		this.renderer.removeClass(document.body, "sidebar-open");
		this.renderer.addClass(document.body, "sidebar-closed");
		this.renderer.addClass(document.body, "sidebar-collapse");
		this.renderer.addClass(document.body, "sidebar-mini");
	}

	ngAfterViewInit(): void {
		this.table1 = $("#table1").DataTable();

		this.bind_mahasiswa();
	}

	bind_mahasiswa(): void {
		this.http.get("https://stmikpontianak.cloud/011100862/tampilMahasiswa.php").subscribe((data: any) => {
			console.log(data);

			data.forEach((element: any) => {
				const tempatTanggalLahir = element.TempatLahir + ", " + element.TanggalLahir;

				const row = [
					element.NIM,
					element.Nama,
					element.JenisKelamin,
					tempatTanggalLahir,
					element.JP,
					element.Alamat,
					element.StatusNikah,
					element.TahunMasuk,
				];

				this.table1.row.add(row);
			});

			this.table1.draw(false);
		});
	}
}
