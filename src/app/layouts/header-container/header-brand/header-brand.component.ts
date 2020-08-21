import { Component, OnInit } from '@angular/core';
import { SidebarService } from '@core/services/sidebar.service';

@Component({
  selector: 'app-header-brand',
  templateUrl: './header-brand.component.html',
  styleUrls: ['./header-brand.component.scss']
})
export class HeaderBrandComponent implements OnInit {

  toggleSidebar() {
    this.sidebarService.toggleActive();
  }

  constructor(
    private sidebarService: SidebarService,
  ) { }

  ngOnInit() {
  }

}
