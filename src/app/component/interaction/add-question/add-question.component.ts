import {ChangeDetectionStrategy, Component, HostListener, Input} from '@angular/core';

import {GroupBo} from '../../../core/data/group-bo.model';
import {QuestionDataService} from '../../../core/service/question-data.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddQuestionComponent {

  @Input()
  public group: GroupBo;

  public get label(): string {
    return `Add question ${this.group ? 'to group' : ''}`;
  }

  constructor(private questionData: QuestionDataService) {
  }

  @HostListener('click')
  public onClick(): void {
    this.questionData.addQuestion(this.group);
  }
}
