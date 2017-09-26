import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {BuildGroupComponent} from './build-group.component';

import {CoreModule} from '../../../core/core.module';
import {GroupBo} from '../../../core/data/group-bo.model';
import {AppMaterialModule} from '../../../material/app-material.module';
import {AddQuestionComponent} from '../../interaction/add-question/add-question.component';
import {BuildLinkDirective} from '../build-link/build-link.directive';
import {BuildQuestionComponent} from '../build-question/build-question.component';


describe('BuildGroupComponent', () => {
  let component: BuildGroupComponent;
  let fixture: ComponentFixture<BuildGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppMaterialModule, CoreModule, RouterTestingModule],
      declarations: [BuildGroupComponent, BuildQuestionComponent, AddQuestionComponent, BuildLinkDirective]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildGroupComponent);
    component = fixture.componentInstance;
    component.group = new GroupBo();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
