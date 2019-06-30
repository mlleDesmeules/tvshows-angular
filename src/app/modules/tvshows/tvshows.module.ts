import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TvmazeService } from "../../core/services/tvshows/tvmaze.service";

import { TvshowsRoutingModule } from "./tvshows-routing.module";
import { ListComponent } from "./pages/list/list.component";

@NgModule({
	declarations: [ ListComponent ],
	imports     : [
		CommonModule,
		HttpClientModule,
		TvshowsRoutingModule,
	],
	providers   : [
		TvmazeService,
	],
})
export class TvshowsModule {}
