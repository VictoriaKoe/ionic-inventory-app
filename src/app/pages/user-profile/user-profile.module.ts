import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfilePageRoutingModule } from './user-profile-routing.module';

import { UserProfilePage } from './user-profile.page';
import { UserProfilePopoverComponent } from 'src/app/components/user-profile-popover/user-profile-popover.component';
import { NavigationBarComponent } from 'src/app/components/navigation-bar/navigation-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfilePageRoutingModule,
    UserProfilePopoverComponent,
    NavigationBarComponent
  ],
  declarations: [UserProfilePage]
})
export class UserProfilePageModule {}
