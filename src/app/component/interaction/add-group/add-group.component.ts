import {ChangeDetectionStrategy, Component, HostListener} from '@angular/core';

import {QuestionDataService} from '../../../core/service/question-data.service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddGroupComponent {

  constructor(private questionData: QuestionDataService) {
  }

  @HostListener('click')
  public onClick(): void {
    this.questionData.addGroup();
  }

}
