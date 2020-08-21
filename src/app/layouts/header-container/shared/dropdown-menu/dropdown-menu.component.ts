import { Component, OnInit } from '@angular/core';
import { UiConfigService } from '@core/services/ui-config.service';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {

  readonly items = this.uiConfigs.getHeaderMenu();

  constructor(
    private uiConfigs: UiConfigService,
  ) { }

  ngOnInit(): void {
  }


}
