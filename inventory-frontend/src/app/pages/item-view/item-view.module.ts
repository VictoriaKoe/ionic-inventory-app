import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemViewPageRoutingModule } from './item-view-routing.module';

import { ItemViewPage } from './item-view.page';
import { NavigationBarComponent } from 'src/app/components/navigation-bar/navigation-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemViewPageRoutingModule,
    NavigationBarComponent
  ],
  declarations: [ItemViewPage]
})
export class ItemViewPageModule {}
