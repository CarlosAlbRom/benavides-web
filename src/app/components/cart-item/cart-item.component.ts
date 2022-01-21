import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MArticle } from 'src/app/models/article.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  constructor() { }

  @Input() public article: MArticle = null;
  @Output() public delete = new EventEmitter<boolean>();
  @Output() public changeAmount = new EventEmitter<number>();

  public base: string = `${environment.api}/image/`;

  ngOnInit(): void {
  }

  public onClose(){
    this.delete.emit(true);
  }

  public onChange(){
    this.changeAmount.emit(this.article.amount);
  }

  public changeValue(method?: null | '-' | '+'){
    switch (method) {
      case '+':
        this.article.amount++
        break;

      case '-':
        this.article.amount--
        break;

      default:
        break;
    }

    if (this.article.amount < 1) {
      this.article.amount = 1;
    }

    this.onChange();
  }

}
