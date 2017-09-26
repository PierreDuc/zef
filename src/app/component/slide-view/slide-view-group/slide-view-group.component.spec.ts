import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CoreModule} from '../../../core/core.module';
import {GroupBo} from '../../../core/data/group-bo.model';

import {SlideViewGroupComponent} from './slide-view-group.component';
import {SlideViewDataTitleComponent} from '../slide-view-data-title/slide-view-data-title.component';

describe('SlideViewGroupComponent', () => {
  let component: SlideViewGroupComponent;
  let fixture: ComponentFixture<SlideViewGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      declarations: [SlideViewGroupComponent, SlideViewDataTitleComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideViewGroupComponent);
    component = fixture.componentInstance;
    component.group = new GroupBo();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
