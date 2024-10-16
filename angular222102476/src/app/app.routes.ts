import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";

export const routes: Routes = [
	{ path: "", redirectTo: "login", pathMatch: "full" },
	{ path: "dashboard", component: DashboardComponent },
	{ path: "login", component: LoginComponent },
	// { path: "about", loadChildren: () => import("./about/about.module").then((m) => m.AboutModule) },
	// { path: "contact", loadChildren: () => import("./contact/contact.module").then((m) => m.ContactModule) },

	// { path: "**", redirectTo: "login" },
];

NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
});

export class AppRoutes {}
