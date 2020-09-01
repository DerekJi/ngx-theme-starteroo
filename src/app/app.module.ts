import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutsModule } from '@layouts/layouts.module';
import { HomeModule } from '@pages/home/home.module';
import { SidebarModule } from '@layouts/sidebar/sidebar.module';
import { TreeMenuModule } from '@layouts/tree-menu/tree-menu.module';
import { FooterContainerModule } from '@layouts/footer-container/footer-container.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    LayoutsModule,
    HomeModule,

    SidebarModule,
    TreeMenuModule,
    FooterContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
