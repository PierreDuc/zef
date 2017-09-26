import {APP_INITIALIZER, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {QuestionDataService} from './service/question-data.service';
import {SwiperNavigationService} from './service/swiper-navigation.service';

import {questionDataLocation} from './token/question-data-location.token';
import {applicationInit} from './factory/application-init.factory';

@NgModule({
  imports: [
    HttpModule
  ],
  providers: [
    QuestionDataService,
    SwiperNavigationService,
    {provide: questionDataLocation, useValue: 'data.json'},
    {provide: APP_INITIALIZER, useFactory: applicationInit, deps: [QuestionDataService], multi: true}
  ],
  declarations: [],
  exports: [
    CommonModule,
    HttpModule,
    FormsModule
  ]
})
export class CoreModule {
}
