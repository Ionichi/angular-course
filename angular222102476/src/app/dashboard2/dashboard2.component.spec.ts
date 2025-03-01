import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Dashboard2Component } from "./dashboard2.component";

describe("Dashboard2Component", () => {
	let component: Dashboard2Component;
	let fixture: ComponentFixture<Dashboard2Component>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Dashboard2Component],
		}).compileComponents();

		fixture = TestBed.createComponent(Dashboard2Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
