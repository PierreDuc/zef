import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {QuestionBo} from '../../../core/data/question-bo.model';

@Component({
  selector: 'app-slide-view-question',
  templateUrl: './slide-view-question.component.html',
  styleUrls: ['./slide-view-question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideViewQuestionComponent {

  @Input()
  public question: QuestionBo;

}
