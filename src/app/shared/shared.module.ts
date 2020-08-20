import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownArrowComponent } from './components/dropdown-arrow/dropdown-arrow.component';



@NgModule({
  declarations: [DropdownArrowComponent],
  exports: [DropdownArrowComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
