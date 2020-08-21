import { Component, OnInit, Input } from '@angular/core';
import { ITreeMenuNode } from '../models/tree-menu-node.interface';

@Component({
  selector: 'app-tree-menu-node',
  templateUrl: './tree-menu-node.component.html',
  styleUrls: ['./tree-menu-node.component.scss']
})
export class TreeMenuNodeComponent implements OnInit {

  @Input() node: ITreeMenuNode;

  public active = false;

  constructor() { }

  ngOnInit(): void {
  }

  get hasChildren(): boolean { return this.node.nodes && this.node.nodes.length > 0; }
  get nodeId(): string { return this.node.url && this.hasChildren ? this.node.url.replace('#', '') : ''; }

  toggleActive(): void {
    this.active = !this.active;
  }

  array(num: number): Array<number> {
    return Array(num);
  }
}
