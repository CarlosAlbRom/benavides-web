import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() crumbs: Crumb[] = [];

  ngOnInit(): void {
  }


}

interface Crumb{
  title: string,
  url: string
}
