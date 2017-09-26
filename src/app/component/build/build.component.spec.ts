import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoreModule} from '../../core/core.module';
import {AppMaterialModule} from '../../material/app-material.module';

import {AddGroupComponent} from '../interaction/add-group/add-group.component';
import {AddQuestionComponent} from '../interaction/add-question/add-question.component';

import {BuildComponent} from './build.component';
import {BuildFooterComponent} from './build-footer/build-footer.component';
import {BuildGroupComponent} from './build-group/build-group.component';
import {BuildHeaderComponent} from './build-header/build-header.component';
import {BuildLinkDirective} from './build-link/build-link.directive';
import {BuildQuestionComponent} from './build-question/build-question.component';


describe('BuildComponent', () => {
  let component: BuildComponent;
  let fixture: ComponentFixture<BuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, AppMaterialModule],
      declarations: [
        BuildComponent,
        BuildQuestionComponent,
        BuildGroupComponent,
        BuildHeaderComponent,
        BuildFooterComponent,
        BuildLinkDirective,
        AddQuestionComponent,
        AddGroupComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
