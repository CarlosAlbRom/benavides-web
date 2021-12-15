import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() public article: Article = null;
  @Input() public index: number = null;

  public color: string = "#053370";

  constructor() { }

  ngOnInit(): void {
    // console.log((this.index % 2))

    // if ((this.index % 2)) {
    //   this.color = "#053370"
    // } else {
    //   this.color = "#a3cd01"
    // }
  }

}

interface Article{
  title: string,
  img: string,
  price?: number,
  size?: number,
  id: number
}
