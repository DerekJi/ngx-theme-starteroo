import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-container',
  templateUrl: './dropdown-container.component.html',
  styleUrls: ['./dropdown-container.component.scss']
})
export class DropdownContainerComponent implements OnInit {

  @Input() arrowPosition: 'left' | 'right' = 'right';
  @Input() width: number = 20;

  get styles() {
    return {
      "width.rem": this.width,
    };
  }

  constructor() { }

  ngOnInit() {
  }

}
