import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-views-page',
  templateUrl: './quick-views-page.component.html',
  styleUrls: ['./quick-views-page.component.less']
})
export class QuickViewsPageComponent implements OnInit {
  userList: any = [
    {
      firstName: 'Koper', 
      lastName: 'Peter',
      photoUrl: '', 
      isCollapsedTopBar: false,
      contactGraphList: [
        {
          title: 'Leads', color: '#A3A0FB', count: '16', percent: '100'
        },
        {
          title: 'Prospects', color: '#56D9FE', count: '13', percent: '90'
        },
        {
          title: 'Customers', color: '#FF8373', count: '9', percent: '65'
        },
        {
          title: 'Open task', color: '#37C976', count: '3', percent: '30'
        },
        {
          title: 'Overdue task', color: '#FFDA83', count: '1', percent: '10'
        },
      ],
      taskHistoryList: [
        {
          name: 'Coen van der Kolk',
          date: '31 aug. 2018 08:50',
          image: 'https://images.asos-media.com/products/bejsbolka-chernyj-belyj-the-north-face-the-norm/10265685-1-black?$XL$?$XXL$&wid=300&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=sharp2&op_usm=1,0.4,6,1&iccEmbed=0&printRes=72'
        },
        {
          name: 'Grant Solomonesck',
          date: '20 aug. 2018 08:50',
          image: 'https://images.asos-media.com/products/bejsbolka-chernyj-belyj-the-north-face-the-norm/10265685-1-black?$XL$?$XXL$&wid=300&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=sharp2&op_usm=1,0.4,6,1&iccEmbed=0&printRes=72'
        },
        {
          name: 'Grantowner Moriskovich',
          date: '31 aug. 2018 08:50',
          image: 'https://resources.stuff.co.nz/content/dam/images/1/n/t/2/j/z/image.related.StuffLandscapeSixteenByNine.620x349.1nqgze.png/1515968097908.jpg'
        },
      ],
      completeTaskList: [
        {
          "name": "Mon",
          "series": [
            {
              "name": "Belafspraak",
              "value": 5
            },
            {
              "name": "Offerte ver",
              "value": 12
            },
            {
              "name": "Bezoekafspraak",
              "value": 10
            },
            {
              "name": "Some text",
              "value": 15
            },
          ]
        },
        {
          "name": "Tue",
          "series": [
            {
              "name": "Belafspraak",
              "value": 10
            },
            {
              "name": "Offerte ver",
              "value": 16
            },
            {
              "name": "Bezoekafspraak",
              "value": 6
            },
            {
              "name": "Some text",
              "value": 28
            },
          ]
        },
        {
          "name": "Wed",
          "series": [
            {
              "name": "Belafspraak",
              "value": 6
            },
            {
              "name": "Offerte ver",
              "value": 12
            },
            {
              "name": "Bezoekafspraak",
              "value": 9
            },
            {
              "name": "Some text",
              "value": 24
            },
          ]
        },
        {
          "name": "Thu",
          "series": [
            {
              "name": "Belafspraak",
              "value": 7
            },
            {
              "name": "Offerte ver",
              "value": 13
            },
            {
              "name": "Bezoekafspraak",
              "value": 16
            },
            {
              "name": "Some text",
              "value": 10
            },
          ]
        },
        {
          "name": "Fri",
          "series": [
            {
              "name": "Belafspraak",
              "value": 12
            },
            {
              "name": "Offerte ver",
              "value": 9
            },
            {
              "name": "Bezoekafspraak",
              "value": 14
            },
            {
              "name": "Some text",
              "value": 10
            },
          ]
        },
        {
          "name": "Sat",
          "series": [
            {
              "name": "Belafspraak",
              "value": 5
            },
            {
              "name": "Offerte ver",
              "value": 15
            },
            {
              "name": "Bezoekafspraak",
              "value": 9
            },
            {
              "name": "Some text",
              "value": 20
            },
          ]
        },
        {
          "name": "Sun",
          "series": [
            {
              "name": "Belafspraak",
              "value": 14
            },
            {
              "name": "Offerte ver",
              "value": 15
            },
            {
              "name": "Bezoekafspraak",
              "value": 8
            },
            {
              "name": "Some text",
              "value": 30
            },
          ]
        },
      ],
    },
    {
      firstName: 'Koper', 
      lastName: 'Peter',
      photoUrl: '', 
      isCollapsedTopBar: false,
      contactGraphList: [
        {
          title: 'Leads', color: '#A3A0FB', count: '16', percent: '100'
        },
        {
          title: 'Prospects', color: '#56D9FE', count: '13', percent: '90'
        },
        {
          title: 'Customers', color: '#FF8373', count: '9', percent: '65'
        },
        {
          title: 'Open task', color: '#37C976', count: '3', percent: '30'
        },
        {
          title: 'Overdue task', color: '#FFDA83', count: '1', percent: '10'
        },
      ],
      taskHistoryList: [
        {
          name: 'Coen van der Kolk',
          date: '31 aug. 2018 08:50',
          image: 'https://images.asos-media.com/products/bejsbolka-chernyj-belyj-the-north-face-the-norm/10265685-1-black?$XL$?$XXL$&wid=300&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=sharp2&op_usm=1,0.4,6,1&iccEmbed=0&printRes=72'
        },
        {
          name: 'Grant Solomonesck',
          date: '20 aug. 2018 08:50',
          image: 'https://images.asos-media.com/products/bejsbolka-chernyj-belyj-the-north-face-the-norm/10265685-1-black?$XL$?$XXL$&wid=300&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=sharp2&op_usm=1,0.4,6,1&iccEmbed=0&printRes=72'
        },
        {
          name: 'Grantowner Moriskovich',
          date: '31 aug. 2018 08:50',
          image: 'https://resources.stuff.co.nz/content/dam/images/1/n/t/2/j/z/image.related.StuffLandscapeSixteenByNine.620x349.1nqgze.png/1515968097908.jpg'
        },
      ],
      completeTaskList: [
        {
          "name": "Mon",
          "series": [
            {
              "name": "Belafspraak",
              "value": 5
            },
            {
              "name": "Offerte ver",
              "value": 12
            },
            {
              "name": "Bezoekafspraak",
              "value": 10
            },
            {
              "name": "Some text",
              "value": 15
            },
          ]
        },
        {
          "name": "Tue",
          "series": [
            {
              "name": "Belafspraak",
              "value": 10
            },
            {
              "name": "Offerte ver",
              "value": 16
            },
            {
              "name": "Bezoekafspraak",
              "value": 6
            },
            {
              "name": "Some text",
              "value": 28
            },
          ]
        },
        {
          "name": "Wed",
          "series": [
            {
              "name": "Belafspraak",
              "value": 6
            },
            {
              "name": "Offerte ver",
              "value": 12
            },
            {
              "name": "Bezoekafspraak",
              "value": 9
            },
            {
              "name": "Some text",
              "value": 24
            },
          ]
        },
        {
          "name": "Thu",
          "series": [
            {
              "name": "Belafspraak",
              "value": 7
            },
            {
              "name": "Offerte ver",
              "value": 13
            },
            {
              "name": "Bezoekafspraak",
              "value": 16
            },
            {
              "name": "Some text",
              "value": 10
            },
          ]
        },
        {
          "name": "Fri",
          "series": [
            {
              "name": "Belafspraak",
              "value": 12
            },
            {
              "name": "Offerte ver",
              "value": 9
            },
            {
              "name": "Bezoekafspraak",
              "value": 14
            },
            {
              "name": "Some text",
              "value": 10
            },
          ]
        },
        {
          "name": "Sat",
          "series": [
            {
              "name": "Belafspraak",
              "value": 5
            },
            {
              "name": "Offerte ver",
              "value": 15
            },
            {
              "name": "Bezoekafspraak",
              "value": 9
            },
            {
              "name": "Some text",
              "value": 20
            },
          ]
        },
        {
          "name": "Sun",
          "series": [
            {
              "name": "Belafspraak",
              "value": 14
            },
            {
              "name": "Offerte ver",
              "value": 15
            },
            {
              "name": "Bezoekafspraak",
              "value": 8
            },
            {
              "name": "Some text",
              "value": 30
            },
          ]
        },
      ],
    },
    {
      firstName: 'Koper', 
      lastName: 'Peter',
      photoUrl: '', 
      isCollapsedTopBar: false,
      contactGraphList: [
        {
          title: 'Leads', color: '#A3A0FB', count: '16', percent: '100'
        },
        {
          title: 'Prospects', color: '#56D9FE', count: '13', percent: '90'
        },
        {
          title: 'Customers', color: '#FF8373', count: '9', percent: '65'
        },
        {
          title: 'Open task', color: '#37C976', count: '3', percent: '30'
        },
        {
          title: 'Overdue task', color: '#FFDA83', count: '1', percent: '10'
        },
      ],
      taskHistoryList: [
        {
          name: 'Coen van der Kolk',
          date: '31 aug. 2018 08:50',
          image: 'https://images.asos-media.com/products/bejsbolka-chernyj-belyj-the-north-face-the-norm/10265685-1-black?$XL$?$XXL$&wid=300&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=sharp2&op_usm=1,0.4,6,1&iccEmbed=0&printRes=72'
        },
        {
          name: 'Grant Solomonesck',
          date: '20 aug. 2018 08:50',
          image: 'https://images.asos-media.com/products/bejsbolka-chernyj-belyj-the-north-face-the-norm/10265685-1-black?$XL$?$XXL$&wid=300&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=sharp2&op_usm=1,0.4,6,1&iccEmbed=0&printRes=72'
        },
        {
          name: 'Grantowner Moriskovich',
          date: '31 aug. 2018 08:50',
          image: 'https://resources.stuff.co.nz/content/dam/images/1/n/t/2/j/z/image.related.StuffLandscapeSixteenByNine.620x349.1nqgze.png/1515968097908.jpg'
        },
      ],
      completeTaskList: [
        {
          "name": "Mon",
          "series": [
            {
              "name": "Belafspraak",
              "value": 5
            },
            {
              "name": "Offerte ver",
              "value": 12
            },
            {
              "name": "Bezoekafspraak",
              "value": 10
            },
            {
              "name": "Some text",
              "value": 15
            },
          ]
        },
        {
          "name": "Tue",
          "series": [
            {
              "name": "Belafspraak",
              "value": 10
            },
            {
              "name": "Offerte ver",
              "value": 16
            },
            {
              "name": "Bezoekafspraak",
              "value": 6
            },
            {
              "name": "Some text",
              "value": 28
            },
          ]
        },
        {
          "name": "Wed",
          "series": [
            {
              "name": "Belafspraak",
              "value": 6
            },
            {
              "name": "Offerte ver",
              "value": 12
            },
            {
              "name": "Bezoekafspraak",
              "value": 9
            },
            {
              "name": "Some text",
              "value": 24
            },
          ]
        },
        {
          "name": "Thu",
          "series": [
            {
              "name": "Belafspraak",
              "value": 7
            },
            {
              "name": "Offerte ver",
              "value": 13
            },
            {
              "name": "Bezoekafspraak",
              "value": 16
            },
            {
              "name": "Some text",
              "value": 10
            },
          ]
        },
        {
          "name": "Fri",
          "series": [
            {
              "name": "Belafspraak",
              "value": 12
            },
            {
              "name": "Offerte ver",
              "value": 9
            },
            {
              "name": "Bezoekafspraak",
              "value": 14
            },
            {
              "name": "Some text",
              "value": 10
            },
          ]
        },
        {
          "name": "Sat",
          "series": [
            {
              "name": "Belafspraak",
              "value": 5
            },
            {
              "name": "Offerte ver",
              "value": 15
            },
            {
              "name": "Bezoekafspraak",
              "value": 9
            },
            {
              "name": "Some text",
              "value": 20
            },
          ]
        },
        {
          "name": "Sun",
          "series": [
            {
              "name": "Belafspraak",
              "value": 14
            },
            {
              "name": "Offerte ver",
              "value": 15
            },
            {
              "name": "Bezoekafspraak",
              "value": 8
            },
            {
              "name": "Some text",
              "value": 30
            },
          ]
        },
      ],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
