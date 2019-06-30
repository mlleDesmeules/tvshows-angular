import { Component, OnInit } from "@angular/core";
import { TvmazeService } from "../../../../core/services/tvshows/tvmaze.service";

@Component({
	selector   : "app-list",
	templateUrl: "./list.component.html",
	styleUrls  : [ "./list.component.scss" ],
})
export class ListComponent implements OnInit {

	constructor(private TVMaze: TvmazeService) { }

	ngOnInit() {
		this.TVMaze
			.search("charmed")
			.subscribe((res) => {
				console.log(res);
			});
	}

}
