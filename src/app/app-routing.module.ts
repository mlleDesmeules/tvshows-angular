import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ContentLayoutComponent } from "./layout/content-layout/content-layout.component";

const routes: Routes = [
	{
		path        : "",
		component   : ContentLayoutComponent,
		loadChildren: () => import("./modules/tvshows/tvshows.module").then(m => m.TvshowsModule),
	},
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
})
export class AppRoutingModule {}
