import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { HeaderContainerComponent } from './header-container/header-container.component';
import { HeaderBrandComponent } from './header-container/header-brand/header-brand.component';
import { HeaderSearchbarComponent } from './header-container/header-searchbar/header-searchbar.component';
import { HeaderProfileComponent } from './header-container/header-profile/header-profile.component';
import { HeaderNavContainerComponent } from './header-container/header-nav-container/header-nav-container.component';
import { DropdownContainerComponent } from './header-container/shared/dropdown-container/dropdown-container.component';
import { DropdownListComponent } from './header-container/shared/dropdown-list/dropdown-list.component';
import { DropdownSheetsComponent } from './header-container/shared/dropdown-sheets/dropdown-sheets.component';
import { DropdownMenuComponent } from './header-container/shared/dropdown-menu/dropdown-menu.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { TreeMenuModule } from './tree-menu/tree-menu.module';

@NgModule({
  declarations: [
    HeaderContainerComponent,
    HeaderBrandComponent,
    HeaderSearchbarComponent,
    HeaderProfileComponent,
    HeaderNavContainerComponent,

    DropdownContainerComponent,
    DropdownListComponent,
    DropdownSheetsComponent,
    DropdownMenuComponent,
  ],
  exports: [
    HeaderContainerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,

    SidebarModule,
    TreeMenuModule,
  ]
})
export class LayoutsModule { }
