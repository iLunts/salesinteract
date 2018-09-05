import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from '../../model/many-models';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.less']
})
export class ProductItemComponent implements OnInit {
  private _product: ProductItem;

  constructor() { }

  ngOnInit() { }

  @Input()
  set product(product: ProductItem) {
    this._product = product;
  }

  get product(): ProductItem {
    return this._product;
  }

}
