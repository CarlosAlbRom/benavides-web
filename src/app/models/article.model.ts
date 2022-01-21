import { IArticle } from '../interfaces/article.interface';
import { MBase } from "./basic.model";
import { MColor } from './color.model';

export class MArticle extends MBase {

  public id: number = null;
  public name: string = null;
  public code: string = null;
  public departmentId: number = null;
  public categoryId: number = null;
  public image: string = null;
  public price: number = null;
  public featured: boolean = false;
  public description: string = null;
  public colors: MColor[] = [];
  public type: number = 0;
  public amount: number = 0;

  constructor(article?: IArticle){
    super()

    if (article) {
      this.id = article.id_article;
      this.name = article.name;
      this.code = article.code;
      this.departmentId = article.id_department;
      this.categoryId = article.id_category;
      this.image = article.image_url;
      this.price = article.price;
      this.featured = article.featured;
      this.description = article.description
      this.type = article.type
    } else {
      this.isNew = true;
    }

  }

  public interface(): IArticle{
    return {
      id_article: this.id,
      code: this.code,
      name: this.name,
      id_department: this.departmentId,
      id_category: this.categoryId,
      description: this.description,
      featured: this.featured,
      image_url: this.image,
      price: this.price,
      type: this.type
    }
  }

}