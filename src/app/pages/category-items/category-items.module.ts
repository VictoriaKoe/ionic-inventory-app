import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryItemsPageRoutingModule } from './category-items-routing.module';

import { CategoryItemsPage } from './category-items.page';
import { NavBar2Component } from 'src/app/components/nav-bar2/nav-bar2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryItemsPageRoutingModule,
    NavBar2Component
  ],
  declarations: [CategoryItemsPage]
})
export class CategoryItemsPageModule {}
