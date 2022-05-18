import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { forkJoin } from 'rxjs';
import { MArticle } from 'src/app/models/article.model';
import { MColor } from 'src/app/models/color.model';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(
    private api: ApiService,
    private activeRoute: ActivatedRoute,
    private main: MainComponent,
    private alert: AlertService
  ) { }

  public allColor: MColor[] = []
  public colorName: string = "";
  public colorCode: string = "";
  public selectedColor: MColor = null;
  public apiRoute: string = environment.api
  public article: MArticle = null;
  public relatedArticles: MArticle[] = null;
  public loading: boolean = true;

  ngOnInit(): void {
    this.activeRoute.params.subscribe(res => {

      let id = res.id;
      
      this.api.getArticleById(id).subscribe((res) => {
        this.article = res.data;

        let colors = this.api.getColorsByType(this.article.type);
        let related = this.api.getRelatedArticles(id, this.article.categoryId)

        forkJoin({
          colors: colors,
          related: related
        }).subscribe(({colors, related}) => {
            this.allColor = colors.data;
            if (this.allColor.length > 0) {
              this.selectedColor = this.allColor[0];
              this.colorName = this.selectedColor.name;
              this.colorCode = this.selectedColor.code;
            }
            this.relatedArticles = related.data;

            this.loading = false;
        })

      })

    })
  }

  public changeValue(method?: null | '-' | '+'){
    switch (method) {
      case '+':
        this.article.amount++
        break;

      case '-':
        this.article.amount--
        break;

      default:
        break;
    }

    if (this.article.amount < 1) {
      this.article.amount = 1;
    }
  }

  public addToCart(){
    let added = this.main.addToCart(this.article);
    if (added) {
      this.alert.success(`${this.article.name} ha sido añadido a tu carrito de compras`)
    } else {
      this.alert.success(`${this.article.name} ha sido actualizado en tu carrito de compras`)
    }
  }

}
