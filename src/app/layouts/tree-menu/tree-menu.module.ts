import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeMenuComponent } from './tree-menu.component';
import { TreeMenuNodeComponent } from './tree-menu-node/tree-menu-node.component';



@NgModule({
  declarations: [TreeMenuComponent, TreeMenuNodeComponent],
  exports: [TreeMenuComponent],
  imports: [
    CommonModule
  ]
})
export class TreeMenuModule { }
