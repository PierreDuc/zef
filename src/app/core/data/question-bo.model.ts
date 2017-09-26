import {DataBo} from './data-bo.model';

import {DataType} from '../enum/data-type.enum';

export class QuestionBo extends DataBo {
  public title: string = 'New question';
  public type: DataType = DataType.Question;
}
