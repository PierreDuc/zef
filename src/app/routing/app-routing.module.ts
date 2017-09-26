import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BuildComponent} from '../component/build/build.component';
import {DesignComponent} from '../component/design/design.component';
import {SetupComponent} from '../component/setup/setup.component';
import {SlideViewComponent} from '../component/slide-view/slide-view.component';

export const appRoutes: Routes = [
  {
    path: 'build',
    component: BuildComponent
  },
  {
    path: 'design',
    component: DesignComponent
  },
  {
    path: 'setup',
    component: SetupComponent
  },
  {
    path: '',
    component: SlideViewComponent,
    outlet: 'view'
  },
  {
    path: ':object_id',
    component: SlideViewComponent,
    outlet: 'view'
  },
  {
    path: '',
    redirectTo: '/build',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
