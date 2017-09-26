import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoreModule} from '../../../core/core.module';
import {AppMaterialModule} from '../../../material/app-material.module';

import {SlideViewGroupBannerComponent} from './slide-view-group-banner.component';

describe('SlideViewGroupBannerComponent', () => {
  let component: SlideViewGroupBannerComponent;
  let fixture: ComponentFixture<SlideViewGroupBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, AppMaterialModule],
      declarations: [SlideViewGroupBannerComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideViewGroupBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
