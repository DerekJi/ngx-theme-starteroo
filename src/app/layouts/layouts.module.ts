import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { HeaderBrandComponent } from './header-container/header-brand/header-brand.component';
import { HeaderSearchbarComponent } from './header-container/header-searchbar/header-searchbar.component';
import { HeaderProfileComponent } from './header-container/header-profile/header-profile.component';
import { HeaderNavContainerComponent } from './header-container/header-nav-container/header-nav-container.component';


@NgModule({
  declarations: [
    HeaderContainerComponent,
    HeaderBrandComponent,
    HeaderSearchbarComponent,
    HeaderProfileComponent,
    HeaderNavContainerComponent,
  ],
  exports: [
    HeaderContainerComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
