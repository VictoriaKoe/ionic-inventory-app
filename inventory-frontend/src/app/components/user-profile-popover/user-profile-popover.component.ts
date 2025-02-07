import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, NO_ERRORS_SCHEMA, OnInit, Output } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { IonCol, IonGrid, IonRow, IonList } from '@ionic/angular/standalone';
import { LoginAuthService } from 'src/app/services/login-auth.service';

@Component({
  selector: 'app-user-profile-popover',
  templateUrl: './user-profile-popover.component.html',
  styleUrls: ['./user-profile-popover.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA], 
  imports: [IonCol, IonGrid, IonRow, CommonModule, IonList],
})

export class UserProfilePopoverComponent implements OnInit {

  @Input() defaultAvatars: string[] = [];
  @Output() avatarSelected = new EventEmitter<string>();
  selectedAvatar: string | null = null;

  constructor(
    private popoverCtrl: PopoverController, 
    private navCtrl: NavController,
    private authService: LoginAuthService
  ) {}

  ngOnInit() {}

  // logout
  async logout() {
    
    // wait the logout popup to dismiss
    await this.popoverCtrl.dismiss();

    // action to logout
    this.authService.logout();
  }

}
