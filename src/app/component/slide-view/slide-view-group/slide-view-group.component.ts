import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {GroupBo} from '../../../core/data/group-bo.model';

@Component({
  selector: 'app-slide-view-group',
  templateUrl: './slide-view-group.component.html',
  styleUrls: ['./slide-view-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideViewGroupComponent {

  @Input()
  public group: GroupBo;

}
