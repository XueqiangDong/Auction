import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private product: Array<Product>;
  public imgUrl = 'http://placehold.it/320x150';

  constructor() {
  }

  ngOnInit() {
    this.product = [
      new Product(1, '第1个商品', 1.99, 0, '吸尘器，清洗灰尘', ['电子产品', '装修家具']),
      new Product(2, '第2个商品', 2.99, 4.5, '吸尘器，清洗灰尘', ['电子产品', '装修家具']),
      new Product(3, '第3个商品', 10.99, 3.5, '吸尘器，清洗灰尘', ['电子产品', '装修家具', '灌溉系统']),
      new Product(4, '第4个商品', 16.99, 1.5, '吸尘器，清洗灰尘', ['电子产品', '装修家具']),
      new Product(5, '第5个商品', 41.99, 4.5, '吸尘器，清洗灰尘', ['电子产品', '装修家具']),
      new Product(6, '第6个商品', 441.99, 5, '吸尘器，清洗灰尘', ['电子产品', '装修家具'])
    ];
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }

}
