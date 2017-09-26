import {Subscription} from 'rxjs/Subscription';

import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';

import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

import {SwiperConfig} from '../../../core/const/swiper-config.const';
import {DataBo} from '../../../core/data/data-bo.model';
import {GroupBo} from '../../../core/data/group-bo.model';
import {DataType} from '../../../core/enum/data-type.enum';

import {QuestionDataService} from '../../../core/service/question-data.service';
import {SwiperNavigationService} from '../../../core/service/swiper-navigation.service';

@Component({
  selector: 'app-slide-view-group-banner',
  templateUrl: './slide-view-group-banner.component.html',
  styleUrls: ['./slide-view-group-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideViewGroupBannerComponent implements OnDestroy, OnInit {

  public activeGroup: GroupBo;
  public inGroupQuestion: boolean;

  private currentIndex: number;
  private swiperChangeSub: Subscription;
  private readonly swiperConfig: SwiperConfigInterface = SwiperConfig;

  constructor(private swiperNav: SwiperNavigationService, private questionDataService: QuestionDataService) {
  }

  ngOnInit(): void {
    this.swiperChangeSub = this.swiperNav.activeChange.subscribe(
      obj => obj && this.setGroup(obj)
    );
  }

  ngOnDestroy(): void {
    this.swiperChangeSub.unsubscribe();
  }

  private setGroup(obj: DataBo): void {
    // set the timeout to 80% of the speed, this way it disappears at the end of the group
    let timeout: number = this.swiperConfig.speed * 0.8;
    const index: number = this.swiperNav.getIndexByKey(obj.key);

    // to make the banner immediately disappear when you scroll upwards outside the group
    if (this.currentIndex > index) {
      timeout = 0;
    }

    this.currentIndex = index;

    setTimeout(() => {
      this.activeGroup = undefined;
      this.inGroupQuestion = false;

      if (obj.type === DataType.Group) {
        this.activeGroup = obj as GroupBo;
      } else if (obj.group) {
        this.activeGroup = this.questionDataService.getObjByKey(obj.group) as GroupBo;
        this.inGroupQuestion = true;
      }
    }, timeout);
  }
}
