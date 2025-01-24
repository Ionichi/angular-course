import { AfterViewInit, Component, Renderer2 } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "../footer/footer.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HeaderComponent } from "../header/header.component";
import { HttpClient } from "@angular/common/http";

declare const $: any;
declare const moment: any;

@Component({
	selector: "app-cuaca",
	standalone: true,
	imports: [HeaderComponent, SidebarComponent, FooterComponent, RouterModule],
	templateUrl: "./cuaca.component.html",
	styleUrl: "./cuaca.component.css",
})
export class CuacaComponent implements AfterViewInit {
	private table1: any;

	constructor(
		private renderer: Renderer2,
		private http: HttpClient,
	) {
		this.renderer.removeClass(document.body, "sidebar-open");
		this.renderer.addClass(document.body, "sidebar-closed");
	}
	ngAfterViewInit(): void {
		this.table1 = $("#table1").DataTable({
			columnDefs: [
				{
					targets: 0,
					render: function (data: string) {
						const waktu = moment(data + " UTC");
						console.log(waktu);

						const html =
							waktu.local().format("YYYY-MM-DD") + "<br />" + waktu.local().format("HH:mm") + " WIB";

						return html;
					},
				},
				{
					targets: 1,
					render: function (data: string) {
						const html =
							"<img src='" + data + "' style='filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.7));' />";

						return html;
					},
				},
				{
					targets: 2,
					render: function (data: string) {
						const array = data.split("||");
						const cuaca = array[0];
						const description = array[1];
						const html = "<strong>" + cuaca + "</strong> <br />" + description;

						return html;
					},
				},
			],
		});

		// this.getData();
	}

	getData(city: string): void {
		city = encodeURIComponent(city);
		this.http
			.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d219424c8188579492a9e6af91d16740`)
			.subscribe(
				(data: any) => {
					let list = data.list;
					console.log(list);

					this.table1.clear();

					list.forEach((element: any) => {
						const weather = element.weather[0];
						console.log(weather);

						const iconUrl = "https://openweathermap.org/img/wn/" + weather.icon + "@2x.png";
						const cuacaDeskripsi = weather.main + "|| " + weather.description;

						const main = element.main;
						console.log(main);

						const tempMin = this.kelvinToCelcius(main.temp_min);
						console.log({ tempMin });

						const tempMax = this.kelvinToCelcius(main.temp_max);
						console.log({ tempMax });

						const temp = tempMin + "°C - " + tempMax + "°C";

						const row = [element.dt_txt, iconUrl, cuacaDeskripsi, temp];

						this.table1.row.add(row);
					});

					this.table1.draw(false);
				},
				(error: any) => {
					alert(error.error.message);
					this.table1.clear();
					this.table1.draw(false);
				},
			);
	}

	kelvinToCelcius(kelvin: any): any {
		let celcius = kelvin - 273.15;
		celcius = Math.round(celcius * 100) / 100;

		return celcius;
	}

	handleEnter(event: any) {
		const cityName = event.target.value;
		if (cityName == "") {
			this.table1.clear();
			this.table1.draw(false);
		}
		this.getData(cityName);
	}
}
