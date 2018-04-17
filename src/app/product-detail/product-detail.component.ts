import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentProduct, Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  protected product: Product;
  protected comments: CommentProduct[];
  newRating: number = 5;
  newComment: string = '';
  isCommentHidden: boolean = true;

  constructor(protected routeInfo: ActivatedRoute,
              protected productService: ProductService
  ) {
  }

  ngOnInit() {

    // let productId: number = this.routeInfo.snapshot.params['productId'];
    let productId: number = this.routeInfo.snapshot.queryParams['id'];
    // console.log(productId);
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);

  }

  addComment() {
    let comment = new CommentProduct(0, this.product.id, new Date().toISOString(), 'someone', this.newRating, this.newComment);
    this.comments.unshift(comment);

    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;

    this.newRating = 5;
    this.newComment = null;
    this.isCommentHidden = true;
  }

}
