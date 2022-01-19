import { IColor } from '../interfaces/color.interface';
import { MBase } from "./basic.model";

export class MColor extends MBase {

  public id: number = null;
  public name: string = null;
  public code: string = null;
  public hex: string = null;

  constructor(color?: IColor){
    super()

    if (color) {
      this.id = color.id_color;
      this.name = color.name;
      this.code = color.code;
      this.hex = color.hex;
    } else {
      this.isNew = true;
    }

  }

  public interface(): IColor{
    return {
      id_color: this.id,
      code: this.code,
      name: this.name,
      hex: this.hex
    }
  }

}