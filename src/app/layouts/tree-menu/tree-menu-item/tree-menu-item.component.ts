import { Component, OnInit, Input } from '@angular/core';
import { ITreeMenuNode } from '@core/models/menu-node.interface';

@Component({
  selector: 'app-tree-menu-item',
  templateUrl: './tree-menu-item.component.html',
  styleUrls: ['./tree-menu-item.component.scss']
})
export class TreeMenuItemComponent implements OnInit {

  @Input() item: ITreeMenuNode;
  @Input() current = false;
  @Input() level = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
