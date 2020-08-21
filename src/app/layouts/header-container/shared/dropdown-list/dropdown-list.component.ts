import { Component, OnInit, Input } from '@angular/core';

import { IDropdownListItem } from '@core/models/dropdown-list-item.interface';
import { UiConfigService } from '@core/services/ui-config.service';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent implements OnInit {

  @Input() header: string = 'Activities';
  @Input() items: IDropdownListItem[] = this.uiConfigs.getActivities();

  constructor(
    private uiConfigs: UiConfigService,
  ) { }

  ngOnInit() {
  }

}
