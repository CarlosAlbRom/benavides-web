import { ISlider } from "../interfaces/slider.interface";
import { MBase } from "./basic.model";

export class MSlider extends MBase {

  public id: number = null;
  public title: string = null;
  public url: string = null;
  public order: number = null;

  constructor(slider?: ISlider){
    super()

    if (slider) {
      this.id = slider.id_slider;
      this.title = slider.title;
      this.url = slider.url;
      this.order = slider.order;
    } else {
      this.isNew = true;
    }

  }

  public interface(): ISlider{
    return {
      id_slider: this.id,
      order: this.order,
      title: this.title,
      url: this.url
    }
  }

}
