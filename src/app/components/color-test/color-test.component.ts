import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'color-test',
  templateUrl: './color-test.component.html',
  styleUrls: ['./color-test.component.scss']
})
export class ColorTestComponent implements OnInit {

  public color: string[] = [
    "blanco",
    "verde",
    "azul",
    "negro"
  ]

  titleColor: string[] = [
    "#b18b00",
    "#c5c035",
    "#e59012",
    "#e5be30"
  ]

  public index: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
