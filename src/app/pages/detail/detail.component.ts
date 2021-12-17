import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor() { }

  public amount: number = 0;

  public color: any = 1;

  public selectedColor: any = 1;

  ngOnInit(): void {
  }

  public changeValue(method?: null | '-' | '+'){
    switch (method) {
      case '+':
        this.amount++
        break;

      case '-':
        this.amount--
        break;

      default:
        break;
    }

    if (this.amount < 0) {
      this.amount = 0;
    }
  }

  public changeColor(color?: any){
    this.color = color
  }

}
