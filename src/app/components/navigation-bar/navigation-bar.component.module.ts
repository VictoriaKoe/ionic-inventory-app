import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NavigationBarComponent } from './navigation-bar.component';

@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule, 
    IonicModule,
  ],
  declarations: [NavigationBarComponent],
  exports: [NavigationBarComponent]
})
export class NavigationBarComponentModule {}