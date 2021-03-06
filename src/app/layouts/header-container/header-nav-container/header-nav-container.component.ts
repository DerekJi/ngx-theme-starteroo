import { Component, OnInit } from '@angular/core';
import { UiConfigService } from '@core/services/ui-config.service';

@Component({
  selector: 'app-header-nav-container',
  templateUrl: './header-nav-container.component.html',
  styleUrls: ['./header-nav-container.component.scss']
})
export class HeaderNavContainerComponent implements OnInit {

  readonly sheets = this.uiConfigs.getSheets();
  readonly activities = this.uiConfigs.getActivities();
  readonly messages = this.uiConfigs.getMessages();

  constructor(
    private uiConfigs: UiConfigService,
  ) { }

  ngOnInit(): void {
  }

}
