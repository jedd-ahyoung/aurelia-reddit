import {ListingService} from './listing-service';

export class Listing {
	static inject () {
		return [ListingService];
	}

	constructor (listingService) {
		this.listingService = listingService;
		this.listings = [];
		this.before = null;
		this.after = null;
	}

	activate (type) {
		return this.listingService.get(type.type || 'hot')
			.then(response => {
				this.listings = response.content.data.children;
				this.before = response.content.data.before;
				this.after = response.content.data.after;
			});
	}

	next () {

	}

	prev () {

	}
}