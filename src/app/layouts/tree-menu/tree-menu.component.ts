import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ITreeMenuNode } from '@core/models/menu-node.interface';
import { TreeMenuService } from '@core/services/tree-menu.service';

@Component({
  selector: 'app-tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.scss']
})
export class TreeMenuComponent implements OnInit {

  @Input() mode = 'side';

  public currentNodeId: number | string;

  get navId(): string { return `nav-${this.mode}`; }

  get menuItems$(): Observable<ITreeMenuNode[]> { return this.menuService.values$; }

  toggleCurrent(item: ITreeMenuNode): void {
    this.currentNodeId = item.id;
    console.log(`current: ${this.currentNodeId}`);

  }

  isCurrent(item: ITreeMenuNode): boolean {
    const cur = this.currentNodeId === item.id;
    return cur;
  }

  constructor(
    private menuService: TreeMenuService,
  ) { }

  ngOnInit(): void {
    this.menuService.read();
  }

}
