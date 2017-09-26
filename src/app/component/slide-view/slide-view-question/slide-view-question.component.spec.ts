import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoreModule} from '../../../core/core.module';
import {QuestionBo} from '../../../core/data/question-bo.model';

import {SlideViewDataTitleComponent} from '../slide-view-data-title/slide-view-data-title.component';
import {SlideViewQuestionComponent} from './slide-view-question.component';

describe('SlideViewQuestionComponent', () => {
  let component: SlideViewQuestionComponent;
  let fixture: ComponentFixture<SlideViewQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      declarations: [SlideViewQuestionComponent, SlideViewDataTitleComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideViewQuestionComponent);
    component = fixture.componentInstance;
    component.question = new QuestionBo();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
