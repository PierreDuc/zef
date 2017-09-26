import {DataType} from '../enum/data-type.enum';

export abstract class DataBo {
  public key: string;
  public group: string = '';
  public order: number;
  public title: string;
  public type: DataType;
}
