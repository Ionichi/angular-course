import { AfterViewInit, Component, Renderer2 } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterModule } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { formatCurrency } from "@angular/common";

declare const $: any;

@Component({
	selector: "app-forex",
	standalone: true,
	imports: [HeaderComponent, SidebarComponent, FooterComponent, RouterModule],
	templateUrl: "./forex.component.html",
	styleUrl: "./forex.component.css",
})
export class ForexComponent implements AfterViewInit {
	private _table1: any;
	private currenciesName: any;

	constructor(
		private renderer: Renderer2,
		private http: HttpClient,
	) {
		this.renderer.removeClass(document.body, "sidebar-open");
		this.renderer.addClass(document.body, "sidebar-closed");
	}

	ngAfterViewInit(): void {
		this._table1 = $("#table1").DataTable({
			columnDefs: [{ targets: 3, className: "text-right" }],
		});

		this.getCurrenciesName();
		this.getData();
	}

	getData(): void {
		console.log("getData()");

		const url = "https://openexchangerates.org/api/latest.json?app_id=ed7da89c86024435b2759feebe9d4ce2";

		this.http.get(url).subscribe((data: any) => {
			const rates = data.rates;
			$("#tanggal").html("Data per tanggal " + this.formatDate(new Date(data.timestamp * 1000)));

			let index = 1;
			for (const key in rates) {
				const name = this.currenciesName[key];
				const value = key == "IDR" ? rates[key] : rates["IDR"] / rates[key];

				const row = [index++, key, name, formatCurrency(value, "en-US", "Rp ", key)];

				this._table1.row.add(row);
			}

			this._table1.draw(false);
		});
	}

	formatDate(date: Date) {
		return (
			[
				date.getDate().toString().padStart(2, "0"),
				(date.getMonth() + 1).toString().padStart(2, "0"),
				date.getFullYear(),
			].join("-") +
			" Pukul " +
			[
				date.getHours().toString().padStart(2, "0"),
				date.getMinutes().toString().padStart(2, "0"),
				date.getSeconds().toString().padStart(2, "0"),
			].join(":") +
			" (local)"
		);
	}

	getCurrenciesName() {
		const url = "https://openexchangerates.org/api/currencies.json?app_id=ed7da89c86024435b2759feebe9d4ce2";

		this.http.get(url).subscribe((data) => {
			this.currenciesName = data;
		});
	}
}
