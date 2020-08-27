import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeMenuComponent } from './tree-menu.component';
import { TreeMenuItemComponent } from './tree-menu-item/tree-menu-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TreeMenuComponent, TreeMenuItemComponent],
  exports: [TreeMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class TreeMenuModule { }
