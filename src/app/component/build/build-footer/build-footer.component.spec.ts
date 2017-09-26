import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BuildFooterComponent} from './build-footer.component';

import {CoreModule} from '../../../core/core.module';
import {AppMaterialModule} from '../../../material/app-material.module';
import {AddGroupComponent} from '../../interaction/add-group/add-group.component';
import {AddQuestionComponent} from '../../interaction/add-question/add-question.component';


describe('BuildFooterComponent', () => {
  let component: BuildFooterComponent;
  let fixture: ComponentFixture<BuildFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppMaterialModule, CoreModule],
      declarations: [BuildFooterComponent, AddQuestionComponent, AddGroupComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
