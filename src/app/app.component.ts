import {ChangeDetectionStrategy, Component} from '@angular/core';

import {AppTitle} from './core/const/app-title.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public readonly tabs: { link: string, label: string }[] = [
    {link: '/build', label: 'Build'},
    {link: '/design', label: 'Design'},
    {link: '/setup', label: 'Setup'}
  ];

  public readonly title: string = AppTitle;

  constructor() {
  }

}
