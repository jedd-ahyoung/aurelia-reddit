import {HttpClient} from 'aurelia-http-client';
import {join} from 'aurelia-path';

export class ListingService {
	static inject () {
		return [HttpClient];
	}

	constructor (http) {
		this.http = http;
		this.baseUrl = 'http://www.reddit.com/';
	}

	get (url) {
		return this.http.get(join(this.baseUrl, url) + '.json');
	}
}