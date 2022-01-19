import { SiteViewerComponent } from './../../components/site-viewer/site-viewer.component';
import { environment } from './../../../environments/environment';
import { SliderService } from './../../services/slider.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { MSlider } from 'src/app/models/slider.model';
import { MatDialog } from '@angular/material/dialog';
import { MArticle } from 'src/app/models/article.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  public imageObject: Array<object> = null;

  constructor(
    private sliderService: SliderService,
    private dialog: MatDialog,
    private api: ApiService
  ) { }

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },

  };

  public featuredArticles: MArticle[] = null;

  ngOnInit(): void {

    this. imageObject = [
      {
        image: 'assets/slider/banner-1.jpg',
        // image: 'https://gentelonuestro.net/pinturasbenavides/assets/slider/banner-1.jpg',
        thumbImage: 'https://gentelonuestro.net/pinturasbenavides/assets/slider/banner-1.jpg',
      }, {
        image: 'https://gentelonuestro.net/pinturasbenavides/assets/slider/banner-2.jpg',
        thumbImage: 'https://gentelonuestro.net/pinturasbenavides/assets/slider/banner-2.jpg',
      }, {
        image: 'https://gentelonuestro.net/pinturasbenavides/assets/slider/banner-3.jpg',
        thumbImage: 'https://gentelonuestro.net/pinturasbenavides/assets/slider/banner-3.jpg',
      }
    ]

    this.api.getFeaturedArticles().subscribe(res => {
      this.featuredArticles = res.data;
    })

  }

  public viewSite(title: string, url: string, numbers: string[], address: string){

    let modal = this.dialog.open(
      SiteViewerComponent,
      {
        data: {
          url: url,
          numbers: numbers,
          title: title,
          address: address
        }
      }
    )

  }

}
