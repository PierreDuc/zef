import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'app-build-header',
  templateUrl: './build-header.component.html',
  styleUrls: ['./build-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuildHeaderComponent {

  @Input()
  @HostBinding('innerHtml')
  public title: string;

}
