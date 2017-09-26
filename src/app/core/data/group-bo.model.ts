import {DataBo} from './data-bo.model';
import {QuestionBo} from './question-bo.model';

import {DataType} from '../enum/data-type.enum';

export class GroupBo extends DataBo {
  public title: string = 'New group';
  public type: DataType = DataType.Group;
  public questions: QuestionBo[] = [];
}
