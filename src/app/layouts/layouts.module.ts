import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { HeaderContainerComponent } from './header-container/header-container.component';
import { HeaderBrandComponent } from './header-container/header-brand/header-brand.component';
import { HeaderSearchbarComponent } from './header-container/header-searchbar/header-searchbar.component';
import { HeaderProfileComponent } from './header-container/header-profile/header-profile.component';
import { HeaderNavContainerComponent } from './header-container/header-nav-container/header-nav-container.component';
import { DropdownContainerComponent } from './header-container/shared/dropdown-container/dropdown-container.component';
import { DropdownSheetsComponent } from './header-container/shared/dropdown-sheets/dropdown-sheets.component';


@NgModule({
  declarations: [
    HeaderContainerComponent,
    HeaderBrandComponent,
    HeaderSearchbarComponent,
    HeaderProfileComponent,
    HeaderNavContainerComponent,

    DropdownContainerComponent,
    DropdownSheetsComponent,
  ],
  exports: [
    HeaderContainerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class LayoutsModule { }
