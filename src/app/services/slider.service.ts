import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { APIResponse } from '../interfaces/response.interface';
import { MSlider } from '../models/slider.model';
import { ISlider } from '../interfaces/slider.interface';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(
    private http: HttpClient
  ) { }

  public getSliders(){
    return this.http.get<APIResponse>(`${environment.api}/slider`).pipe(
      map((res) => {
        if (res.status) {
          res.data = res.data.map((s: ISlider) => new MSlider(s))
        }
        return res;
      })
    )
  }
}
