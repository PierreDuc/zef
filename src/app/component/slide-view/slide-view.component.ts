import {Subscription} from 'rxjs/Subscription';

import {
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit,
  ViewChild
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {SwiperConfigInterface, SwiperDirective} from 'ngx-swiper-wrapper';

import {SwiperConfig} from '../../core/const/swiper-config.const';
import {DataBo} from '../../core/data/data-bo.model';
import {GroupBo} from '../../core/data/group-bo.model';
import {DataType} from '../../core/enum/data-type.enum';

import {QuestionDataService} from '../../core/service/question-data.service';
import {SwiperNavigationService} from '../../core/service/swiper-navigation.service';

@Component({
  templateUrl: './slide-view.component.html',
  styleUrls: ['./slide-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideViewComponent implements AfterViewInit, OnDestroy, OnInit {

  @ViewChild(SwiperDirective)
  public swiper: SwiperDirective;

  public readonly swiperConfig: SwiperConfigInterface = SwiperConfig;
  public readonly types: typeof DataType = DataType;

  private dataChangeSub: Subscription;
  private objectAddedSub: Subscription;
  private routeChangeSub: Subscription;

  private readonly visibleOffset: number = 1;

  constructor(public readonly questionService: QuestionDataService,
              private readonly router: Router,
              private readonly route: ActivatedRoute,
              private readonly swiperNav: SwiperNavigationService,
              private readonly changeRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.dataChangeSub = this.questionService.dataChanged.subscribe(() => {
        this.changeRef.detectChanges();
        this.swiper.update(true);
      }
    );
    this.objectAddedSub = this.questionService.objectAdded.subscribe((obj: DataBo) => {
      setTimeout(() => this.navigateToKey(obj.key))
    });
  }

  ngAfterViewInit(): void {
    // In AfterViewInit and setTimeout to scroll on refresh and to prevent stuttering when scrolling from no view key
    setTimeout(() => {
      this.routeChangeSub = this.route.paramMap.subscribe(params => this.swipeToKey(params.get('object_id')));
    });
  }

  ngOnDestroy(): void {
    this.dataChangeSub.unsubscribe();
    this.objectAddedSub.unsubscribe();
    this.routeChangeSub.unsubscribe();
  }

  public getGroupByObj(obj: DataBo): GroupBo {
    if (obj instanceof GroupBo) {
      return obj
    }
    if (obj.group) {
      return this.questionService.getObjByKey(obj.group) as GroupBo;
    }
  }

  public isVisibleIndex(index: number): boolean {
    const swiperIndex: number = this.swiper.getIndex();
    return swiperIndex >= index - this.visibleOffset && swiperIndex <= index + this.visibleOffset;
  }

  public showAddToGroup(obj: DataBo): boolean {
    if (obj instanceof GroupBo) {
      return obj.questions.length === 0;
    }
    if (!obj.group) {
      return false;
    }

    const group: GroupBo = this.questionService.getObjByKey(obj.group) as GroupBo;

    return group.questions.indexOf(obj) === group.questions.length - 1;
  }

  public onSwiperIndexChange(index: number): void {
    const dataObj: DataBo = this.swiperNav.getObjByIndex(index);
    if (dataObj) {
      this.navigateToKey(dataObj.key);
    }
  }

  public async navigateToKey(key: string): Promise<void> {
    if (this.route.snapshot.paramMap.get('object_id') !== key) {
      await this.router.navigate([{outlets: {view: key}}]);
    }
  }

  public trackByKey: Function = (index: number, dataBo: DataBo): string | number => {
    return dataBo && dataBo.key || index;
  };

  private swipeToKey(key: string): void {
    const index: number = key ? this.swiperNav.getIndexByKey(key) : 0;

    this.swiper.setIndex(index);
    this.swiperNav.activeData = this.swiperNav.getObjByIndex(index);
  }
}
