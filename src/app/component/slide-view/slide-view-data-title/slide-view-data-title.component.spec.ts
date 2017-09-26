import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SlideViewDataTitleComponent} from './slide-view-data-title.component';
import {CoreModule} from '../../../core/core.module';
import {QuestionBo} from '../../../core/data/question-bo.model';

describe('SlideViewDataTitleComponent', () => {
  let component: SlideViewDataTitleComponent;
  let fixture: ComponentFixture<SlideViewDataTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, FormsModule, ReactiveFormsModule],
      declarations: [SlideViewDataTitleComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideViewDataTitleComponent);
    component = fixture.componentInstance;
    component.dataObj = new QuestionBo();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
