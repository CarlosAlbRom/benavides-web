import { Component, Input, OnInit } from '@angular/core';
import { MArticle } from 'src/app/models/article.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() public article: MArticle = null;
  @Input() public index: number = null;
  @Input() public white: boolean = false;

  public color: string = "#053370";

  public base: string = `${environment.api}/image/`

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