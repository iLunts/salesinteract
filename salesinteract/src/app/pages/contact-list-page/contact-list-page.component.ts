import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list-page',
  templateUrl: './contact-list-page.component.html',
  styleUrls: ['./contact-list-page.component.less']
})

export class ContactListPageComponent implements OnInit {

  	taskList: any[];

  	constructor() { }

	ngOnInit() {

		this.taskList = [
			{ 
				type: '1', 
				desc: '', 
				manager: 'Coen van der Kolk', 
				status: '1', 
				date: '16 Jun. 2018 10:25', 
				internal: 'Roident est duis duis sit occaecat ea eiusmod laboris mollit ullamco mollit nisi veniam. it officia commodo ex quis ex fugiat ullamco in enim labore.', 
				external: 'Roident est duis duis sit occaecat ea eiusmod laboris mollit ullamco mollit nisi veniam.'
			},
			{ 
				type: '2', 
				desc: '', 
				manager: 'Coen van der Kolk', 
				status: '2', 
				date: '16 Jun. 2018 10:25', 
				internal: 'Roident est duis duis sit occaecat ea eiusmod laboris mollit ullamco mollit nisi veniam. it officia commodo ex quis ex fugiat ullamco in enim labore.', 
				external: 'Roident est duis duis sit occaecat ea eiusmod laboris mollit ullamco mollit nisi veniam.'
			},
			{ 
				type: '2', 
				desc: '', 
				manager: 'Coen van der Kolk', 
				status: '0', 
				date: '16 Jun. 2018 10:25', 
				internal: 'Roident est duis duis sit occaecat ea eiusmod laboris mollit ullamco mollit nisi veniam. it officia commodo ex quis ex fugiat ullamco in enim labore.', 
				external: 'Roident est duis duis sit occaecat ea eiusmod laboris mollit ullamco mollit nisi veniam.'
			},
		];
	}

}
