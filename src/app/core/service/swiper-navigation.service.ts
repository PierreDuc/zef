import {Subject} from 'rxjs/Subject';

import {Injectable} from '@angular/core';

import {QuestionDataService} from './question-data.service';

import {DataBo} from '../data/data-bo.model';

@Injectable()
export class SwiperNavigationService {

  public readonly activeChange: Subject<DataBo> = new Subject();

  public get activeData(): DataBo {
    return this._activeData;
  }
  public set activeData(activeData: DataBo) {
    this._activeData = activeData;
    this.activeChange.next(activeData);
  }

  private _activeData: DataBo;

  constructor(private questionService: QuestionDataService) {
  }

  public getObjByIndex(index: number): DataBo {
    return this.questionService.stretchedList[index];
  }

  public getIndexByKey(key: string): number {
    return this.questionService.stretchedList.findIndex(obj => obj.key === key);
  }
}
