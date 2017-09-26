import {Subscription} from 'rxjs/Subscription';

import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';

import {DataBo} from '../../../core/data/data-bo.model';
import {GroupBo} from '../../../core/data/group-bo.model';
import {QuestionBo} from '../../../core/data/question-bo.model';
import {QuestionDataService} from '../../../core/service/question-data.service';

@Component({
  selector: 'app-build-group',
  templateUrl: './build-group.component.html',
  styleUrls: ['./build-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuildGroupComponent implements OnInit, OnDestroy {

  @Input()
  public group: GroupBo;

  private dataChangedSub: Subscription;
  private objChangeSub: Subscription;

  constructor(private readonly questionData: QuestionDataService, private readonly changeRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.objChangeSub = this.questionData.objectChanged.subscribe((obj: DataBo) => {
      if (obj === this.group) {
        this.changeRef.detectChanges();
      }
    });
    this.dataChangedSub = this.questionData.dataChanged.subscribe(() => this.changeRef.detectChanges());
  }

  ngOnDestroy(): void {
    this.objChangeSub.unsubscribe();
    this.dataChangedSub.unsubscribe();
  }

  public trackByKey: Function = (index: number, question: QuestionBo): string | number => {
    return question && question.key || index;
  };
}
