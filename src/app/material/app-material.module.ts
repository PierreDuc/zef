import {NgModule} from '@angular/core';
import {MdIconModule, MdTabsModule} from '@angular/material';

@NgModule({
  exports: [
    MdTabsModule,
    MdIconModule
  ]
})
export class AppMaterialModule {
}
