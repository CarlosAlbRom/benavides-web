import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { MArticle } from 'src/app/models/article.model';
import { MColor } from 'src/app/models/color.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(
    private api: ApiService,
    private activeRoute: ActivatedRoute
  ) { }

  public amount: number = 0;

  public allColor: MColor[] = []
  public colorName: string = "";
  public selectedColor: MColor = null;

  public article: MArticle = null;
  public relatedArticles: MArticle[] = null;

  ngOnInit(): void {
    this.activeRoute.params.subscribe(res => {

      let id = res.id;
      let article = this.api.getArticleById(id);
      let colors = this.api.getColors();

      forkJoin({
        article: article,
        colors: colors
      }).subscribe(({article, colors}) => {
        this.article = article.data;
        this.allColor = colors.data
        this.selectedColor = this.allColor[0];
        this.colorName = this.selectedColor.name

        this.api.getRelatedArticles(this.article.id, this.article.categoryId).subscribe((res => {
          this.relatedArticles = res.data;
        }))

      })


    })
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

}
