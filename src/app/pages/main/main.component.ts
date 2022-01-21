import { Component, OnInit } from '@angular/core';
import { MArticle } from 'src/app/models/article.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public articles: MArticle[] = [];

  constructor() { }

  public opened: boolean = false;
  public showList: boolean = false;

  ngOnInit(): void {
    let items = localStorage.getItem("shopping-cart")
    if (items) {
      this.articles = JSON.parse(items);
    } else {
      this.updateState()
    }
  }

  public addToCart(article: MArticle){
    let i = this.articles.findIndex((a) => a.id == article.id);
    let added = false;

    if (i >= 0) {
      this.articles[i].amount = article.amount;
    } else {
      this.articles.push(article);
      added = true
    }

    this.updateState();

    return added;
  }

  public deleteArticle(index: number){
    this.articles.splice(index, 1);
    this.updateState();
  }

  public updateAmount(newAmount: number, index: number){
    this.articles[index].amount = newAmount;
    this.updateState();
  }

  private updateState(){
    let a = JSON.stringify(this.articles)
    localStorage.setItem("shopping-cart", a);
  }

}
