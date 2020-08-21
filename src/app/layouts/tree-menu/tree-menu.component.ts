import { Component, OnInit, Input } from '@angular/core';
import { ITreeMenu } from './models/tree-menu.interface';
import { ITreeMenuNode } from './models/tree-menu-node.interface';

@Component({
  selector: 'app-tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.scss']
})
export class TreeMenuComponent implements OnInit {

  @Input() title = '';
  @Input() id?: string;
  @Input() nodes: ITreeMenuNode[];

  constructor() { }

  ngOnInit(): void {
  }

  get emptyId(): boolean {
    const empty = this.id === null || this.id === undefined || this.id === '';
    console.log(`empty(${this.id}) = ${empty}`);
    return empty;
  }

  hasChildren(node: ITreeMenuNode): boolean { return node.nodes && node.nodes.length > 0; }
  nodeId(node: ITreeMenuNode): string {
    const id = node.url && this.hasChildren(node) ? node.url.replace('#', '') : '';
    return id;
  }

}
