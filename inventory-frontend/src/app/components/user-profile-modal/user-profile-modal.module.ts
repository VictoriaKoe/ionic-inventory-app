import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UserProfileModalComponent } from './user-profile-modal.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [UserProfileModalComponent]
})
export class UserProfilePopoverComponentModule {}