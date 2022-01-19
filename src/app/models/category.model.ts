import { ICategory } from '../interfaces/category.interface';
import { MBase } from "./basic.model";

export class MCategory extends MBase {

  public id: number = null;
  public name: string = null;
  public code: string = null;
  public departmentId: number = null;

  constructor(category?: ICategory){
    super()

    if (category) {
      this.id = category.id_category;
      this.name = category.name;
      this.code = category.code;
      this.departmentId = category.id_department;
    } else {
      this.isNew = true;
    }

  }

  public interface(): ICategory{
    return {
      id_category: this.id,
      code: this.code,
      name: this.name,
      id_department: this.departmentId
    }
  }

}