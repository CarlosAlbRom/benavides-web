import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  public tab: number = 0;

  ngOnInit(): void {
  }

  public changeTab(i: number){
    if (this.tab == i) {
      this.tab = 0;
    } else {
      this.tab = i
    }
  }

}
