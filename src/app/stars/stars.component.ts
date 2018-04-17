import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ImportMetadata} from '@angular/compiler-cli/src/metadata/evaluator';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {

  protected stars: number[];

  @Input()
  protected readonly: boolean = true;

  @Input()
  protected rating: number = 0;

  @Output()
  protected ratingChange: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

    this.stars = [];
    switch (this.rating) {
      case 0:
        this.stars = [0, 0, 0, 0, 0];
        break;
      case 0.5:
        this.stars = [1, 0, 0, 0, 0];
        break;
      case 1:
        this.stars = [2, 0, 0, 0, 0];
        break;
      case 1.5:
        this.stars = [2, 1, 0, 0, 0];
        break;
      case 2:
        this.stars = [2, 2, 0, 0, 0];
        break;
      case 2.5:
        this.stars = [2, 2, 1, 0, 0];
        break;
      case 3:
        this.stars = [2, 2, 2, 0, 0];
        break;
      case 3.5:
        this.stars = [2, 2, 2, 1, 0];
        break;
      case 4:
        this.stars = [2, 2, 2, 2, 0];
        break;
      case 4.5:
        this.stars = [2, 2, 2, 2, 1];
        break;
      case 5:
        this.stars = [2, 2, 2, 2, 2];
        break;
      default:
        this.stars = [0, 0, 0, 0, 0];
    }
  }

  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      // this.ngOnInit();
      this.ratingChange.emit(this.rating);
    } else {
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }

}
