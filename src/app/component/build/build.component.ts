import {Subscription} from 'rxjs/Subscription';

import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit} from '@angular/core';

import {AppTitle} from '../../core/const/app-title.const';
import {DataType} from '../../core/enum/data-type.enum';

import {QuestionDataService} from '../../core/service/question-data.service';

@Component({
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuildComponent implements OnInit, OnDestroy {

  public readonly title: string = AppTitle;

  public readonly types: typeof DataType = DataType;

  private readonly scrollDistanceOffset: number = 10;

  private dataChangedSub: Subscription;

  constructor(public readonly questionService: QuestionDataService,
              private readonly elementRef: ElementRef,
              private readonly changeRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.dataChangedSub = this.questionService.dataChanged.subscribe(() => this.changeRef.detectChanges());
  }

  ngOnDestroy(): void {
    this.dataChangedSub.unsubscribe();
  }

  public scrollToElement(elementRef: ElementRef): void {
    const boundingItem: ClientRect = elementRef.nativeElement.getBoundingClientRect();
    const boundingHost: ClientRect = this.elementRef.nativeElement.getBoundingClientRect();
    let scrollDistance: number = 0;

    if (boundingItem.top < boundingHost.top) {
      scrollDistance = boundingItem.top - boundingHost.top - this.scrollDistanceOffset;
    } else if (boundingItem.bottom > boundingHost.bottom) {
      scrollDistance = boundingItem.bottom - boundingHost.bottom + this.scrollDistanceOffset;
    }

    if (scrollDistance) {
      this.elementRef.nativeElement.scrollTop = this.elementRef.nativeElement.scrollTop + scrollDistance;
    }
  }

}
