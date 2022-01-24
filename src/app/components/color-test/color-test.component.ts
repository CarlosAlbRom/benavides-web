import { Component, OnInit } from '@angular/core';
import { MColor } from 'src/app/models/color.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'color-test',
  templateUrl: './color-test.component.html',
  styleUrls: ['./color-test.component.scss']
})
export class ColorTestComponent implements OnInit {

  public colors: MColor[] = [];

  public index: number = 0;

  public leftWall: MColor = new MColor({
    code: 'PB 505',
    hex: 'fff8f5',
    id_color: 1,
    name: 'Blanco',
    type: 1
  })

  public rightWall: MColor = new MColor({
    code: 'PB 505',
    hex: 'fff8f5',
    id_color: 1,
    name: 'Blanco',
    type: 1
  })

  public currentWall: number = 0;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.getColorsByType(1).subscribe(res => {
      this.colors = res.data;
      console.log(this.colors)
    })
  }

  public changeColor(color: MColor){
    if (this.currentWall == 0) {
      this.leftWall = color;
    } else {
      this.rightWall = color;
    }
  }

}
