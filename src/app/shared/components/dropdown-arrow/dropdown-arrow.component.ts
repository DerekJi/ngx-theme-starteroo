import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-arrow',
  templateUrl: './dropdown-arrow.component.html',
  styleUrls: ['./dropdown-arrow.component.scss']
})
export class DropdownArrowComponent implements OnInit {

  @Input() position: 'left' | 'right';

  constructor() { }

  ngOnInit() {
  }

}
