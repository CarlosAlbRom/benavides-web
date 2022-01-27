import { Component, OnInit } from '@angular/core';
import { MArticle } from 'src/app/models/article.model';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(
    private main: MainComponent
  ) { }

  public articles: MArticle[] = null;
  public email: string = "";
  public name: string = "";
  public phone: string = "";
  public city: string = "";
  public address: string = "";
  public message: string = "";

  public error = {
    email: "",
    phone: "",
    name: "",
    city: "",
    address: ""
  }

  ngOnInit(): void {
    let items = localStorage.getItem("shopping-cart")
    if (items) {
      this.articles = JSON.parse(items);
    }
  }

  public addAll(): number{
    let i = 0;
    this.articles.forEach((a) => {
      i =+ (a.amount * a.price);
    })
    return i;
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
    this.main.setArticles(this.articles);
  }

  public sendEmail(){
    this.error = {
      email: "",
      name: "",
      phone: "",
      address: "",
      city: ""
    }

    if (this.email == "") {
      this.error.email = "Escríba un correo valído"
    }

    if (this.name == "") {
      this.error.name = "Escríba un nombre valído"
    }

    if (this.phone == "") {
      this.error.phone = "Escríba un telefóno valído"
    }

    if (this.address == "") {
      this.error.address = "Escríba una dirección valída"
    }

    if (this.city == "") {
      this.error.city = "Escríba una ciudad valída"
    }

  }

}
