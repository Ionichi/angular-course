import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { RegisterComponent } from "./register/register.component";
import { AdminComponent } from "./admin/admin.component";
import { Dashboard2Component } from "./dashboard2/dashboard2.component";
import { Dashboard3Component } from "./dashboard3/dashboard3.component";
import { MahasiswaComponent } from "./mahasiswa/mahasiswa.component";

export const routes: Routes = [
	{ path: "", redirectTo: "login", pathMatch: "full" },
	{ path: "admin", component: AdminComponent },
	{ path: "dashboard", component: DashboardComponent },
	{ path: "dashboard2", component: Dashboard2Component },
	{ path: "dashboard3", component: Dashboard3Component },
	{ path: "login", component: LoginComponent },
	{ path: "mahasiswa", component: MahasiswaComponent },
	{ path: "register", component: RegisterComponent },
	// { path: "about", loadChildren: () => import("./about/about.module").then((m) => m.AboutModule) },
	// { path: "contact", loadChildren: () => import("./contact/contact.module").then((m) => m.ContactModule) },

	// { path: "**", redirectTo: "login" },
];

NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
});

export class AppRoutes {}
