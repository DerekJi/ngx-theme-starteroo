import { Component, OnInit, Input } from '@angular/core';
import { IDropdownSheet } from '@core/models/dropdown-sheet.interface';

@Component({
  selector: 'app-dropdown-sheets',
  templateUrl: './dropdown-sheets.component.html',
  styleUrls: ['./dropdown-sheets.component.scss']
})
export class DropdownSheetsComponent implements OnInit {

  @Input() sheets: IDropdownSheet[];

  constructor() { }

  ngOnInit() {
  }

}
