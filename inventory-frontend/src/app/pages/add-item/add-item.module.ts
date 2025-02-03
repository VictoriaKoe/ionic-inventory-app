import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddItemPageRoutingModule } from './add-item-routing.module';

import { AddItemPage } from './add-item.page';
import { NavigationBarComponent } from 'src/app/components/navigation-bar/navigation-bar.component';
import { ImageUploadComponentComponent } from 'src/app/components/image-upload-component/image-upload-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddItemPageRoutingModule,
    NavigationBarComponent,
    ImageUploadComponentComponent
  ],
  declarations: [AddItemPage]
})
export class AddItemPageModule {}
