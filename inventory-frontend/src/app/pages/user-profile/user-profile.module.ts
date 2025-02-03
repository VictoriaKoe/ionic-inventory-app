import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfilePageRoutingModule } from './user-profile-routing.module';

import { UserProfilePage } from './user-profile.page';
import { UserProfilePopoverComponent } from 'src/app/components/user-profile-popover/user-profile-popover.component';
import { NavigationBarComponent } from 'src/app/components/navigation-bar/navigation-bar.component';
import { UserProfileModalComponent } from 'src/app/components/user-profile-modal/user-profile-modal.component';
import { NavBar2Component } from 'src/app/components/nav-bar2/nav-bar2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfilePageRoutingModule,
    UserProfilePopoverComponent,
    NavigationBarComponent,
    UserProfileModalComponent,
    NavBar2Component
  ],
  declarations: [UserProfilePage]
})
export class UserProfilePageModule {}
