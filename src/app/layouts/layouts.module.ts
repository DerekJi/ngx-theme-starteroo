import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { HeaderBrandComponent } from './header-container/header-brand/header-brand.component';


@NgModule({
  declarations: [
    HeaderContainerComponent,
    HeaderBrandComponent,
  ],
  exports: [
    HeaderContainerComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
