import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.less']
})
export class ProductPageComponent implements OnInit {
  public productList: any;

  colorList: any = [
    '#694efc', '#765efe', '#9484ff', '#245cd5', '#4079f3', '#5782e0', '#00cb73', '#00d266', '#00d48b', '#ff1a55', '#ff3967', '#ff5b7d', '#ff8e00', '#ff9242', '#ffa86b' 
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
