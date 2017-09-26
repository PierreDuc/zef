import {Subscription} from 'rxjs/Subscription';

import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';

import {DataBo} from '../../../core/data/data-bo.model';
import {QuestionBo} from '../../../core/data/question-bo.model';
import {QuestionDataService} from '../../../core/service/question-data.service';

@Component({
  selector: 'app-build-question',
  templateUrl: './build-question.component.html',
  styleUrls: ['./build-question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuildQuestionComponent implements OnInit, OnDestroy {

  @Input()
  public question: QuestionBo;

  private objChangeSub: Subscription;

  constructor(private readonly questionData: QuestionDataService, private readonly changeRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.objChangeSub = this.questionData.objectChanged.subscribe((obj: DataBo) => {
      if (obj === this.question) {
        this.changeRef.detectChanges();
      }
    });
  }

  ngOnDestroy(): void {
    this.objChangeSub.unsubscribe();
  }
}
