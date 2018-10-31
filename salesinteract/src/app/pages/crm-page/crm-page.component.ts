import { Component, OnInit } from '@angular/core';
// import { stat1, stat2, stat3 } from '../../model/many-models';


@Component({
  selector: 'app-crm-page',
  templateUrl: './crm-page.component.html',
  styleUrls: ['./crm-page.component.less']
})
export class CrmPageComponent implements OnInit {
  
  isOpenSidebarNewCompany: boolean = false;
  view: any[] = [65, 65];

  taskHistoryLateList: any = [
    {
      contacts: [
        {
          id: '1234-123945-123',
          contactName: 'Coen van der Kolk',
          image: 'https://images.asos-media.com/products/bejsbolka-chernyj-belyj-the-north-face-the-norm/10265685-1-black?$XL$?$XXL$&wid=300&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=sharp2&op_usm=1,0.4,6,1&iccEmbed=0&printRes=72',
        },
      ],
      date: '31 aug. 2018 08:50',
      companyName: 'WALD International inc.',
      companyImage: 'http://www.wald.co.jp/img/ogp_logo_bk.png',
      type: 'Prospect',
      sharedFiles: true,
      openOffer: false,
      products: [
        {
          name: 'Product [NAME] complete %',
          value: '65'
        },
        {
          name: 'Product uncompleate %',
          value: '35'
        }
      ],
      productsColor: {
        domain: ['#f44336', 'rgba(244, 67, 54, .2)']
      },
    },
    {
      contacts: [
        {
          id: '2234-123324-123',
          contactName: 'Grant Solomonesck',
          image: 'https://images.asos-media.com/products/bejsbolka-chernyj-belyj-the-north-face-the-norm/10265685-1-black?$XL$?$XXL$&wid=300&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=sharp2&op_usm=1,0.4,6,1&iccEmbed=0&printRes=72',
        },
      ],
      date: '20 aug. 2018 08:50',
      companyName: 'Fiat',
      companyImage: 'https://upload.wikimedia.org/wikipedia/ru/thumb/6/66/Fiat_Logo_Rus.svg/1024px-Fiat_Logo_Rus.svg.png',
      type: 'Suspect',
      sharedFiles: false,
      openOffer: true,
      products: [
        {
          name: 'Product [NAME] complete %',
          value: '74'
        },
        {
          name: 'Product uncompleate',
          value: '26'
        }
      ],
      productsColor: {
        domain: ['#673ab7', 'rgba(103, 58, 183, .2)']
      },
    },
    {
      contacts: [
        {
          id: '3333-21048-002',
          contactName: 'Barrera Ramsey',
          image: 'https://resources.stuff.co.nz/content/dam/images/1/n/t/2/j/z/image.related.StuffLandscapeSixteenByNine.620x349.1nqgze.png/1515968097908.jpg',
        },
        {
          id: '1111-21048-110',
          contactName: 'Dejesus Norris',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy3GpiPhviabS8kZNIKZesalExjoaEOipybMm6EoSCa-xlhHci',
        },
        {
          id: '2234-21048-231',
          contactName: 'Fitzgerald Stanton',
          image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=350',
        },
      ],
      date: '31 aug. 2018 08:50',
      companyName: 'Bayly Thomas Haynes',
      companyImage: 'https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2018/04/932/470/volkswagen-logo-building.jpg?ve=1&tl=1',
      type: 'Customer',
      sharedFiles: true,
      openOffer: true,
      products: [
        {
          name: 'Product [NAME] complete %',
          value: '95'
        },
        {
          name: 'Product uncompleate',
          value: '5'
        }
      ],
      productsColor: {
        domain: ['#2196f3', 'rgba(33, 150, 243, .2)']
      },
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  openSidebarNewCompany() {
    this.isOpenSidebarNewCompany = !this.isOpenSidebarNewCompany;
  }
}
