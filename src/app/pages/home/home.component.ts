import { SiteViewerComponent } from './../../components/site-viewer/site-viewer.component';
import { environment } from './../../../environments/environment';
import { SliderService } from './../../services/slider.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { MSlider } from 'src/app/models/slider.model';
import { MatDialog } from '@angular/material/dialog';

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
    private dialog: MatDialog
  ) { }

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },

  };

  ngOnInit(): void {
    // this.sliderService.getSliders().subscribe(res => {
    //   console.log(res);
    //   if (res.status) {
    //     let img: any[] = []
    //     res.data.forEach((s: MSlider) => {
    //       img.push({
    //         image: `${environment.api}/slider/${s.url}`,
    //         thumbImage: `${environment.api}/slider/${s.url}`
    //       })
    //     });

    //     this.imageObject = img;

    let origin: `C:\Users\GLN - Desarrollo\Documents\Pinturas Benavides\benavides_web\src\assets\slider`;

    console.log(origin);

    this. imageObject = [
    {
      image: 'https://gentelonuestro.net/pinturasbenavides/assets/slider/banner-1.jpg',
      thumbImage: 'https://gentelonuestro.net/pinturasbenavides/assets/slider/banner-1.jpg',
    }, {
      image: 'https://gentelonuestro.net/pinturasbenavides/assets/slider/banner-2.jpg',
      thumbImage: 'https://gentelonuestro.net/pinturasbenavides/assets/slider/banner-2.jpg',
    }, {
      image: 'https://gentelonuestro.net/pinturasbenavides/assets/slider/banner-3.jpg',
      thumbImage: 'https://gentelonuestro.net/pinturasbenavides/assets/slider/banner-3.jpg',
    }
  ]
    //   }
    //   console.log(this.imageObject)
    // })
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
