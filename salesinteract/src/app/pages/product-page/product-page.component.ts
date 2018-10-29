import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.less']
})
export class ProductPageComponent implements OnInit {
  productList: any = [
    {
      color: '#2196f3',
      title: 'Nescafe cofe',
      desc: 'Some text for description'
    },
    {
      color: '#ff5722',
      title: 'Nescafe Dolce Gusto',
      desc: 'Some text for description'
    },
    {
      color: '#607d8b',
      title: 'Alpin Gold Chocolate',
      desc: 'Some text for description'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
