import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../../environments/environment";

@Injectable()
export class TvmazeService {

	configs: any = environment.api;

	constructor(private http: HttpClient) {
	}

	private _buildURL(uri: string): string {
		return `${this.configs.url}/${uri}`;
	}

	public search(query: string) {
		return this.http.get(this._buildURL(`/search/shows?q=${query}`));
	}


}
