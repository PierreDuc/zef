import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-build-footer',
  templateUrl: './build-footer.component.html',
  styleUrls: ['./build-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuildFooterComponent {}
