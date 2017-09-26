import {Subscription} from 'rxjs/Subscription';

import {
  ChangeDetectorRef, Directive, ElementRef, HostBinding, HostListener, Input, OnDestroy, OnInit,
  Optional
} from '@angular/core';
import {Router} from '@angular/router';

import {BuildComponent} from '../build.component';
import {DataBo} from '../../../core/data/data-bo.model';
import {SwiperNavigationService} from '../../../core/service/swiper-navigation.service';

@Directive({
  selector: '[appBuildLink]'
})
export class BuildLinkDirective implements OnDestroy, OnInit {

  @Input()
  public appBuildLink: string;

  // Let's not make a getter out of this, for performance reasons, and just subscribe to route changes
  @HostBinding('class.active')
  public isActive: boolean = false;

  private swiperChangeSub: Subscription;

  constructor(private readonly router: Router,
              private readonly swiperNav: SwiperNavigationService,
              private readonly elementRef: ElementRef,
              private readonly changeRef: ChangeDetectorRef,
              @Optional()
              private readonly buildComponent: BuildComponent) {
  }

  @HostListener('click')
  public onClick(): void {
    this.router.navigate([{outlets: {view: this.appBuildLink}}]);
  }

  ngOnInit() {
    this.swiperChangeSub = this.swiperNav.activeChange.subscribe(obj => this.setActiveObj(obj));
  }

  ngOnDestroy(): void {
    this.swiperChangeSub.unsubscribe();
  }

  private setActiveObj(obj: DataBo): void {
    const active: boolean = this.isActive;
    this.isActive = obj && this.appBuildLink === obj.key;
    if (this.isActive && this.buildComponent) {
      this.buildComponent.scrollToElement(this.elementRef);
    }
    if (this.isActive !== active) {
      this.changeRef.detectChanges();
    }
  }
}
