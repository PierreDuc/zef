import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {DataBo} from '../../../core/data/data-bo.model';
import {QuestionDataService} from '../../../core/service/question-data.service';

@Component({
  selector: 'app-slide-view-data-title',
  templateUrl: './slide-view-data-title.component.html',
  styleUrls: ['./slide-view-data-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideViewDataTitleComponent {

  @Input()
  public dataObj: DataBo;

  constructor(private questionData: QuestionDataService) {
  }

  public onInputChange(title: string): void {
    this.dataObj.title = title;
    console.log(title);
    this.questionData.objectChanged.emit(this.dataObj);
  }
}
