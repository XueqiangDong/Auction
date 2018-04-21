import {EventEmitter, Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ProductService {

  searchEvent: EventEmitter<ProductSearchParams> = new EventEmitter();

  // protected products: Product[] = [
  //   new Product(1, '第1个商品', 1.99, 0, '吸尘器，清洗灰尘', ['电子产品', '装修家具']),
  //   new Product(2, '第2个商品', 2.99, 4.5, '吸尘器，清洗灰尘，好用', ['电子产品', '装修家具']),
  //   new Product(3, '第3个商品', 10.99, 3.5, '吸尘器，清洗灰尘', ['电子产品', '装修家具', '灌溉系统']),
  //   new Product(4, '第4个商品', 16.99, 1.5, '好用,清洗灰尘', ['电子产品', '装修家具']),
  //   new Product(5, '第5个商品', 41.99, 4.5, '吸尘器，清洗灰尘', ['电子产品', '装修家具']),
  //   new Product(6, '第6个商品', 441.99, 5, '吸尘器，清洗灰尘', ['电子产品', '装修家具'])
  // ];
  // protected comments: CommentProduct[] = [
  //   new CommentProduct(1, 1, '2017-03-05', '张三', 5, '东西很好'),
  //   new CommentProduct(2, 1, '2016-03-05', '李四', 2, '一般'),
  //   new CommentProduct(3, 1, '2015-03-05', '王五', 3, '一般'),
  //   new CommentProduct(4, 2, '2018-03-05', '马六', 5, '东西超级好'),
  //   new CommentProduct(5, 1, '2017-09-05', '严琦', 1, '差'),
  // ];

  constructor(protected http: Http) {
  }

  getAllCategories(): string[] {
    return ['电子产品', '装修家具', '灌溉系统'];
  }

  getProducts(): Observable<Product[]> {
    return this.http.get('/api/products').map(res => res.json());
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get('/api/products/' + id).map(res => res.json());
    // return this.products.find((product) => product.id == id);
    // console.log(id);
    // let prod: Product;
    // prod = this.products.find((product) => product.id == id);
    // if (prod == null) {
    //   console.log('找不到  ' + id);
    // } else {
    //   console.log('找到了  ' + id);
    // }
    // let index: number = id - 1;
    // return this.products[index];
  }

  getCommentsForProductId(id: number): Observable<CommentProduct[]> {
    return this.http.get('/api/products/' + id + '/comments').map(res => res.json());
    // this.comments.filter((comment: CommentProduct) => comment.productId == id);
  }

  protected encodeParams(params: ProductSearchParams) {

    console.log('传进来的params是：' + JSON.stringify(params));
    // console.log('传进来的params的keys过滤后是：' + JSON.stringify(Object.keys(params).filter(item =>
    //   params[item]
    // )));

    let temp = Object.keys(params).filter(item =>
      params[item]
    );
    console.log('过滤后：' + JSON.stringify(temp));

    // let sum = new URLSearchParams();
    // console.log('之前：' + JSON.stringify(sum.get('age')));
    // sum.append('age', '98');
    // console.log('之后：' + JSON.stringify(sum));

    // let temp1 = temp.reduce((sum: URLSearchParams, key) => {
    //   sum.append(key, params[key]);
    //   return sum;
    // }, new URLSearchParams());
    // console.log('最后的值reduce之后：' + JSON.stringify(temp1.get('price')));

    // let result: URLSearchParams = new URLSearchParams();
    let result: URLSearchParams;
    result = Object.keys(params).filter(item => params[item])
      .reduce((sum: URLSearchParams, key: string) => {
        sum.append(key, params[key]);
        return sum;
      }, new URLSearchParams());
    // console.log(JSON.stringify(result.get('title')) + ':看看有没有传过来');
    console.log(JSON.stringify(result) + ':看看有没有传过来');

    return Object.keys(params).filter(item => params[item])
      .reduce((sum: URLSearchParams, key: string) => {
        sum.append(key, params[key]);
        return sum;
      }, new URLSearchParams());
  }

  search(params: ProductSearchParams): Observable<Product[]> {
    console.log(JSON.stringify(params) + ':搜索参数');
    let temp = this.encodeParams(params);
    console.log(temp.get('title') + ':怎么回事');
    // let result = this.http.get('/api/products').map(res => res.json());
    let result = this.http.get('/api/products', {search: this.encodeParams(params)}).map(res => res.json());
    // let result = this.http.get('/api/products', {search:{"price":3} }).map(res => res.json());
    // console.log(JSON.stringify(result) + ':结果是');
    return result;
    // return this.http.get('/api/products', {search: this.encodeParams(params)}).map(res => res.json());
  }

}

export class ProductSearchParams {

  constructor(
    public title: string,
    public price: number,
    public category: string
  ) {
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
