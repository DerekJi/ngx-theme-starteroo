import { Component, OnInit, Input } from '@angular/core';

import { IDropdownListItem } from '@core/models/dropdown-list-item.interface';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent implements OnInit {

  @Input() header: string = 'Activities';
  @Input() items: IDropdownListItem[] = [
    {
      title: ' Jeffrey Wells created a schedule ',
    },
    {
      title: ' Anna Vargas logged a chat ',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
