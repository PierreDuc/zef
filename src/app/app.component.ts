import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public view = 'default';
  public plan = 'monthly';

  public title = 'ZEF Assignment';

  public company = 'Untitled';
}
