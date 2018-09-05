import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list-page',
  templateUrl: './contact-list-page.component.html',
  styleUrls: ['./contact-list-page.component.less']
})

export class ContactListPageComponent implements OnInit {

  	taskList: any = [
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

	fileList: any = [
		{ name: '121_m123a.jpg', added: '14 Jun.  2018 21:07', view: '21:07', image: 'https://cdn.thehandbook.com/app/uploads/2018/06/R0w8EMxlmD.jpeg'},
		{ name: '1ds231_m123a.jpg', added: '23 Feb.  2017 12:01', view: '12:01 ', image: 'http://static2.uk.businessinsider.com/image/58f4e95bdd0895997d8b48d8-1190-625/6-things-you-should-never-store-on-your-work-computer.jpg'},
		{ name: 'm1-35523a.jpg', added: '12 Mar.  2018 08:00', view: '08:00', image: 'https://assets.entrepreneur.com/content/3x2/2000/20180717215329-GettyImages-872892842.jpeg?width=700&crop=2:1'},
	];

	productList: any = [
		{ title: 'Trainingen', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting ', status: 0, color: '#876EB5'},
		{ title: 'Pepsi Cola', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting ', status: 0, color: '#F44336'},
		{ title: 'Roughies Bottle', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting ', status: 0, color: '#FFCC00'},
		{ title: 'Regenand Legend Dr.', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting ', status: 0, color: '#76684E'},
		{ title: 'Coaching', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting ', status: 1, color: '#37C976'},
	];

  	constructor() { }

	ngOnInit() {

	}

}
