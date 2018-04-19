import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  protected products: Observable<Product[]>;
  protected imgUrl = 'http://placehold.it/320x150';
  // protected searchKeyWord: string;
  // protected titleFilter: FormControl = new FormControl();

  constructor(private productService: ProductService) {
    // this.titleFilter.valueChanges.debounceTime(500).subscribe(
    //   value => {
    //     this.searchKeyWord = value;
    //   }
    // );
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}

