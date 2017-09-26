import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {SwiperModule} from 'ngx-swiper-wrapper';

import {SwiperConfig} from '../../core/const/swiper-config.const';
import {CoreModule} from '../../core/core.module';
import {AppMaterialModule} from '../../material/app-material.module';

import {AddQuestionComponent} from '../interaction/add-question/add-question.component';

import {SlideViewGroupBannerComponent} from './slide-view-group-banner/slide-view-group-banner.component';
import {SlideViewGroupComponent} from './slide-view-group/slide-view-group.component';
import {SlideViewQuestionComponent} from './slide-view-question/slide-view-question.component';

import {SlideViewComponent} from './slide-view.component';
import {appRoutes} from '../../routing/app-routing.module';
import {BuildComponent} from '../build/build.component';
import {DesignComponent} from '../design/design.component';
import {SetupComponent} from '../setup/setup.component';

import {SlideViewDataTitleComponent} from './slide-view-data-title/slide-view-data-title.component';
import {BuildHeaderComponent} from '../build/build-header/build-header.component';
import {BuildQuestionComponent} from '../build/build-question/build-question.component';
import {BuildGroupComponent} from '../build/build-group/build-group.component';
import {BuildFooterComponent} from '../build/build-footer/build-footer.component';
import {BuildLinkDirective} from '../build/build-link/build-link.directive';
import {AddGroupComponent} from '../interaction/add-group/add-group.component';

describe('SlideViewComponent', () => {
  let component: SlideViewComponent;
  let fixture: ComponentFixture<SlideViewComponent>;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(appRoutes),
        SwiperModule.forRoot(SwiperConfig),
        CoreModule,
        AppMaterialModule
      ],
      declarations: [
        SlideViewComponent,
        SlideViewGroupBannerComponent,
        SlideViewGroupComponent,
        SlideViewQuestionComponent,
        SlideViewDataTitleComponent,
        BuildComponent,
        BuildHeaderComponent,
        BuildQuestionComponent,
        BuildGroupComponent,
        BuildFooterComponent,
        BuildLinkDirective,
        AddGroupComponent,
        AddQuestionComponent,
        DesignComponent,
        SetupComponent,
        AddQuestionComponent
      ]
    }).compileComponents();
  }));

  const questionCount: number = 2;
  const groupCount: number = 3;
  const hiddenCount: number = 2;

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideViewComponent);
    component = fixture.componentInstance;

    // -1 because the active one is always visible, and this is an offset, not a count
    (component as any)['visibleOffset'] = questionCount + groupCount - hiddenCount - 1;

    Array.from({length: questionCount}, (x, i) => i).forEach(() => {
      component.questionService.addQuestion();
    });
    Array.from({length: groupCount}, (x, i) => i).forEach(() => {
      component.questionService.addGroup();
    });

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should create ${questionCount} question slides`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('app-slide-view-question').length).toEqual(questionCount);
  });

  it(`should create ${groupCount - hiddenCount} group slides`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('app-slide-view-group').length).toEqual(groupCount - hiddenCount);
  });

  it(`should create ${groupCount - hiddenCount + 1} add question buttons`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('app-add-question').length).toEqual(groupCount - hiddenCount + 1);
  });
});
