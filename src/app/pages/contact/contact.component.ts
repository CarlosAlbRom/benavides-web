import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  public email: string = "";
  public name: string = "";
  public phone: string = "";
  public message: string = "";

  public error = {
    email: "",
    phone: "",
    name: ""
  }

  ngOnInit(): void {
  }

  public sendEmail(){
    this.error = {
      email: "",
      name: "",
      phone: ""
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

  }

}
