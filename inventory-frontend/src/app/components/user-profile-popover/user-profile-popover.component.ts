import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, NO_ERRORS_SCHEMA, OnInit, Output } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { IonCol, IonGrid, IonRow, IonList } from '@ionic/angular/standalone';

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

  constructor(private popoverCtrl: PopoverController, private navCtrl: NavController) {}

  ngOnInit() {}

  // // select avatar from popover
  // selectAvatar(avatarPath: string) {
  //   this.popoverCtrl.dismiss(avatarPath);
  // }

  // logout
  async logout() {
    
    await this.popoverCtrl.dismiss();

    this.navCtrl.navigateRoot('/login');
  }

}
