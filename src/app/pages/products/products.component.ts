import { Component, OnInit } from '@angular/core';
import { MArticle } from 'src/app/models/article.model';
import { MCategory } from 'src/app/models/category.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  public tab: number = 0;
  public products: MArticle[] = [];
  public allProducts: MArticle[] = null;
  public departments: depList[] = [
    {
      categories: [],
      id: 1,
      name: "Doméstico"
    },
    {
      categories: [],
      id: 2,
      name: "Artistíco"
    },
    {
      categories: [],
      id: 3,
      name: "Ferretería"
    },
    {
      categories: [],
      id: 4,
      name: "Industrial"
    },
    {
      categories: [],
      id: 5,
      name: "Automotriz"
    },
    {
      categories: [],
      id: 6,
      name: "Impermeabilizante"
    },
    {
      categories: [],
      id: 7,
      name: "Carpintería"
    },
  ]

  ngOnInit(): void {

    this.api.getCategories().subscribe(res => {
      let cat: MCategory[] = res.data
      cat.forEach((c) => {
        this.departments[c.departmentId - 1].categories.push(c);
      })

      console.log(this.departments)
    })
    this.api.getArticles().subscribe(res => {
      this.allProducts = res.data;
      this.products = [...this.allProducts]
    })

  }

  public changeTab(i: number){
    if (this.tab == i) {
      this.tab = 0;
    } else {
      this.tab = i
    }
  }

  public changeCategory(id: number){
    this.products = this.allProducts.filter(e => e.categoryId == id);
  }

}

interface depList {
  name: string,
  id: number,
  categories: MCategory[]
}
