import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {BuildQuestionComponent} from './build-question.component';

import {AppMaterialModule} from '../../../material/app-material.module';
import {BuildLinkDirective} from '../build-link/build-link.directive';
import {CoreModule} from '../../../core/core.module';
import {QuestionBo} from '../../../core/data/question-bo.model';

describe('BuildQuestionComponent', () => {
  let component: BuildQuestionComponent;
  let fixture: ComponentFixture<BuildQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, AppMaterialModule, RouterTestingModule],
      declarations: [BuildQuestionComponent, BuildLinkDirective]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildQuestionComponent);
    component = fixture.componentInstance;
    component.question = new QuestionBo();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
