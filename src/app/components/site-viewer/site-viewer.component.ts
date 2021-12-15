import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-site-viewer',
  templateUrl: './site-viewer.component.html',
  styleUrls: ['./site-viewer.component.scss']
})
export class SiteViewerComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SiteViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  public whatsappNumbers: string[] = [];

  ngOnInit(): void {
    console.log(this.data);

    this.data.numbers.forEach((number: string) => {
      number = number.replace('(', '');
      number = number.replace(')', '');
      number = number.replace(' - ', '');
      number = number.replace('.', '');
      number = number.replace('.', '');

      this.whatsappNumbers.push(number)
    });

    console.log(this.whatsappNumbers)

  }

}
