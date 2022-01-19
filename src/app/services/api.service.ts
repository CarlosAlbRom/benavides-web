import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IArticle } from '../interfaces/article.interface';
import { ICategory } from '../interfaces/category.interface';
import { APIResponse } from '../interfaces/response.interface';
import { MCategory } from '../models/category.model';
import { MArticle } from '../models/article.model';
import { IColor } from '../interfaces/color.interface';
import { MColor } from '../models/color.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getCategories(){
    return this.http.get<APIResponse>(`${environment.api}/category`).pipe(
      map((res) => {
        if (res.status) {
          res.data = res.data.map((c: ICategory) => new MCategory(c))
        }
        return res;
      })
    )
  }

  public getFeaturedArticles(){
    return this.http.get<APIResponse>(`${environment.api}/article/featured`)
    .pipe(
      map((res) => {
        if (res.status && res.data) {
          res.data = res.data.map((c: IArticle) => new MArticle(c))
        }
        return res;
      })
    )
  }

  public getArticles(){
    return this.http.get<APIResponse>(`${environment.api}/article`).pipe(
      map((res) => {
        if (res.status) {
          res.data = res.data.map((c: IArticle) => new MArticle(c))
        }
        return res;
      })
    )
  }

  public getArticleById(id: number){
    return this.http.get<APIResponse>(`${environment.api}/article/${id}`).pipe(
      map((res) => {
        if (res.status) {
          res.data = new MArticle(res.data)
        }
        return res;
      })
    )
  }

  public getRelatedArticles(articleId: number, categoryId: number){
    return this.http.get<APIResponse>(`${environment.api}/article/related/${articleId}/${categoryId}`).pipe(
      map((res) => {
        if (res.status) {
          res.data = res.data.map((c: IArticle) => new MArticle(c))
        }
        return res;
      })
    )
  }

  public getColors(){
    return this.http.get<APIResponse>(`${environment.api}/color`).pipe(
      map((res) => {
        if (res.status) {
          res.data = res.data.map((c: IColor) => new MColor(c))
        }
        return res;
      })
    )
  }

}
