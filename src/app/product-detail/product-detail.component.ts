import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  protected productTile: string;

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.productTile = this.routeInfo.snapshot.params['prodTitle'];
  }

}
