import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SwiperModule} from 'ngx-swiper-wrapper';

import {AppComponent} from './app.component';

import {DesignComponent} from './component/design/design.component';
import {SetupComponent} from './component/setup/setup.component';

import {BuildComponent} from './component/build/build.component';
import {BuildFooterComponent} from './component/build/build-footer/build-footer.component';
import {BuildGroupComponent} from './component/build/build-group/build-group.component';
import {BuildHeaderComponent} from './component/build/build-header/build-header.component';
import {BuildLinkDirective} from './component/build/build-link/build-link.directive';
import {BuildQuestionComponent} from './component/build/build-question/build-question.component';

import {AddQuestionComponent} from './component/interaction/add-question/add-question.component';
import {AddGroupComponent} from './component/interaction/add-group/add-group.component';

import {SlideViewComponent} from './component/slide-view/slide-view.component';
import {SlideViewQuestionComponent} from './component/slide-view/slide-view-question/slide-view-question.component';
import {SlideViewGroupComponent} from './component/slide-view/slide-view-group/slide-view-group.component';
import {SlideViewGroupBannerComponent} from './component/slide-view/slide-view-group-banner/slide-view-group-banner.component';
import {SlideViewDataTitleComponent} from './component/slide-view/slide-view-data-title/slide-view-data-title.component';

import {AppMaterialModule} from './material/app-material.module';
import {AppRoutingModule} from './routing/app-routing.module';
import {CoreModule} from './core/core.module';

import {SwiperConfig} from './core/const/swiper-config.const';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,

    SwiperModule.forRoot(SwiperConfig),

    CoreModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    BuildComponent,
    DesignComponent,
    SetupComponent,

    AddQuestionComponent,
    AddGroupComponent,

    BuildQuestionComponent,
    BuildGroupComponent,
    BuildHeaderComponent,
    BuildFooterComponent,
    BuildLinkDirective,

    SlideViewComponent,
    SlideViewQuestionComponent,
    SlideViewGroupComponent,
    SlideViewGroupBannerComponent,
    SlideViewDataTitleComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
