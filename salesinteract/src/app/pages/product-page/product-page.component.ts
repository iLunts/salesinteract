import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.less']
})
export class ProductPageComponent implements OnInit {
  public productList: any;

  colorList: any = [
    '#6356f3', '#7165f5', '#9088f7', '#a69df9', '#b8b3f9',
    '#305fce', '#4b7beb', '#5f83d9', '#7d9be0', '#8da6e4',
    '#38c77b', '#1fcd71', '#59d091', '#7adaa7', '#a1e5c2',
    '#eb3b59', '#ed4d6a', '#f0677f', '#f28497', '#f5b9c4',
    '#fd9327', '#fb9754', '#fcac76', '#fbc4a0', '#ffdac1' 
  ];

  colorDefault: string;

  constructor() { 
    this.productList = [
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
  }

  ngOnInit() {
    this.colorDefault = this.colorList[this.getRandomInt(this.colorList.length)];
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  addNewProduct(){
    this.productList.push(
      {
        color: 'red', title: 'Some title', desc: 'Some text for description...'
      }
    );
  }

}
