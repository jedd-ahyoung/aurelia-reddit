import {Behavior} from 'aurelia-framework';

export class ListItem {
	static metadata () {
		return Behavior.withProperty('listing');
	}
}