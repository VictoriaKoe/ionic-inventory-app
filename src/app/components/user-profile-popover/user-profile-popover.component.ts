import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, NO_ERRORS_SCHEMA, OnInit, Output } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-user-profile-popover',
  templateUrl: './user-profile-popover.component.html',
  styleUrls: ['./user-profile-popover.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA], 
  imports: [IonCol, IonGrid, IonRow, CommonModule],
})

export class UserProfilePopoverComponent implements OnInit {

  @Input() defaultAvatars: string[] = [];
  @Output() avatarSelected = new EventEmitter<string>();
  selectedAvatar: string | null = null;

  constructor(private popoverCtrl: PopoverController) {}

  ngOnInit() {
      // get actual pic from database
      this.defaultAvatars = [
      'assets/avatars/avatar1.png',
      'assets/avatars/avatar2.png',
      'assets/avatars/avatar3.png',
      'https://ionicframework.com/docs/img/demos/avatar.svg'
    ];
  }

  // select avatar from popover
  selectAvatar(avatarPath: string) {
    this.popoverCtrl.dismiss(avatarPath);

    // this.selectedAvatar = avatarPath;
    // this.avatarSelected.emit(avatarPath);
  }

}
