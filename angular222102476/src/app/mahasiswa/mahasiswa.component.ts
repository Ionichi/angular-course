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

		this.bindMahasiswa();
	}

	bindMahasiswa(): void {
		this.http.get("https://stmikpontianak.cloud/011100862/tampilMahasiswa.php").subscribe((data: any) => {
			console.log(data);

			this.table1.clear();

			data.forEach((element: any) => {
				const tempatTanggalLahir = element.TempatLahir + ", " + element.TanggalLahir;
				const jenisKelamin =
					element.JenisKelamin +
					(element.JenisKelamin == "Laki-laki" ||
					element.JenisKelamin == "Laki-Laki" ||
					element.JenisKelamin == "Laki Laki"
						? ` <i class="fas fa-mars"></i>`
						: ` <i class="fas fa-venus"></i>`);

				const row = [
					element.NIM,
					element.Nama,
					jenisKelamin,
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

	showTambahModal(): void {
		$("#tambahModal").modal("show");
	}

	postRecord(): void {
		let alamat = $("#alamat").val();
		let jenisKelamin = $("#jenis_kelamin").val();
		let jp = $("#jurusan_prodi").val();
		let nama = $("#nama").val();
		let nim = $("#nim").val();
		let statusNikah = $("#status_nikah").val();
		let tahunMasuk = $("#tahun_masuk").val();
		let tanggalLahir = $("#tgl_lahir").val();
		let tempatLahir = $("#tempat_lahir").val();

		if (nim.length == 0) {
			alert("Nim belum diisi");
			return;
		}

		if (nama.length == 0) {
			alert("Nama belum diisi");
			return;
		}

		if (tempatLahir.length == 0) {
			alert("Tempat lahir belum diisi");
			return;
		}

		if (tanggalLahir.length == 0) {
			alert("Tanggal lahir belum diisi");
			return;
		}

		if (alamat.length == 0) {
			alert("Alamat belum diisi");
			return;
		}

		if (tahunMasuk.length == 0) {
			alert("Tahun masuk belum diisi");
			return;
		}

		alamat = encodeURIComponent(alamat);
		jenisKelamin = encodeURIComponent(jenisKelamin);
		jp = encodeURIComponent(jp);
		nama = encodeURIComponent(nama);
		nim = encodeURIComponent(nim);
		statusNikah = encodeURIComponent(statusNikah);
		tahunMasuk = encodeURIComponent(tahunMasuk);
		tanggalLahir = encodeURIComponent(tanggalLahir);
		tempatLahir = encodeURIComponent(tempatLahir);

		const url =
			"https://stmikpontianak.cloud/011100862/tambahMahasiswa.php" +
			"?alamat=" +
			alamat +
			"&jenisKelamin=" +
			jenisKelamin +
			"&jp=" +
			jp +
			"&nama=" +
			nama +
			"&nim=" +
			nim +
			"&statusPernikahan=" +
			statusNikah +
			"&tahunMasuk=" +
			tahunMasuk +
			"&tanggalLahir=" +
			tanggalLahir +
			"&tempatLahir=" +
			tempatLahir;

		this.http.get(url).subscribe((data: any) => {
			console.log(data);
			alert(data.status + " --> " + data.message);

			this.bindMahasiswa();
			$("#tambahModal").modal("hide");
		});
	}
}
