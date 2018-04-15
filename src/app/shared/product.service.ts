import {Injectable} from '@angular/core';

@Injectable()
export class ProductService {

  protected products: Product[] = [
    new Product(1, '第1个商品', 1.99, 0, '吸尘器，清洗灰尘', ['电子产品', '装修家具']),
    new Product(2, '第2个商品', 2.99, 4.5, '吸尘器，清洗灰尘Added .float-{sm,md,lg,xl}-{left,right,none} classes for responsive floats and removed .pull-left and .pull-right since they’re redundant to .float-left and .float-right.', ['电子产品', '装修家具']),
    new Product(3, '第3个商品', 10.99, 3.5, '吸尘器，清洗灰尘', ['电子产品', '装修家具', '灌溉系统']),
    new Product(4, '第4个商品', 16.99, 1.5, 'Added .float-{sm,md,lg,xl}-{left,right,none} classes for responsive floats and removed .pull-left and .pull-right since they’re redundant to .float-left and .float-right.清洗灰尘', ['电子产品', '装修家具']),
    new Product(5, '第5个商品', 41.99, 4.5, '吸尘器，清洗灰尘', ['电子产品', '装修家具']),
    new Product(6, '第6个商品', 441.99, 5, '吸尘器，清洗灰尘', ['电子产品', '装修家具'])
  ];
  protected comments: CommentProduct[] = [
    new CommentProduct(1, 1, '2017-03-05', '张三', 5, '东西很好'),
    new CommentProduct(2, 1, '2016-03-05', '李四', 2, '一般'),
    new CommentProduct(3, 1, '2015-03-05', '王五', 3, '一般'),
    new CommentProduct(4, 2, '2018-03-05', '马六', 5, '东西超级好'),
    new CommentProduct(5, 1, '2017-09-05', '严琦', 1, '差'),
  ];

  constructor() {
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProductId(id: number): CommentProduct[] {
    return this.comments.filter((comment: CommentProduct) => comment.productId == id);
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

export class CommentProduct {
  constructor(public id: number,
              public productId: number,
              public timesstamp: string,
              public user: string,
              public rating: number,
              public content: string
  ) {
  }

}
