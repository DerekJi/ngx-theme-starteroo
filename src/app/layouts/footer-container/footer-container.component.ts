import { Component, OnInit } from '@angular/core';

import { FOOTER_LINKS, IFooterLink } from '@core/configs/footer-links.config';

@Component({
  selector: 'app-footer-container',
  templateUrl: './footer-container.component.html',
  styleUrls: ['./footer-container.component.scss']
})
export class FooterContainerComponent implements OnInit {

  readonly links: IFooterLink[] = FOOTER_LINKS;

  readonly thisYear = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
