import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formModel: FormGroup;
  categories: string[];
  // 测试代码
  // testForm: FormGroup;

  // 测试代码

  constructor(protected productService: ProductService) {
    let fb = new FormBuilder();
    this.formModel = fb.group({
      title: ['', Validators.minLength(3)],
      price: [null, this.positiveNumberValidator],
      category: ['']
    });

    // let fb1 = new FormBuilder();
    // this.testForm = fb1.group({
    //   user: ['65'],
    //   list:['']
    // });
  }

  ngOnInit() {
    this.categories = this.productService.getAllCategories();
  }

  positiveNumberValidator(control: FormControl): any {
    if (!control.value) {
      return null;
    }
    let price = parseInt(control.value);
    if (price > 0) {
      return null;
    } else {
      return {positiveNumber: true};
    }
  }

  onSearch() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
      this.productService.searchEvent.emit(this.formModel.value);
    }
  }

  // onTest() {
  //   console.log(this.formModel.value);
  //   console.log('测试提交被按下' + this.testForm.value + '有效性:' + this.testForm.valid);
  // }

}
