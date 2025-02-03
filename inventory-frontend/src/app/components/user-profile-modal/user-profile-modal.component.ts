import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { IonButtons, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButton,
  IonIcon,
  IonContent,
  IonGrid,
  IonCol, 
  IonRow ,
  IonFooter,
  IonModal
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-user-profile-modal',
  templateUrl: './user-profile-modal.component.html',
  styleUrls: ['./user-profile-modal.component.scss'],
  imports: [
    IonHeader, 
    IonToolbar, 
    IonButtons, 
    IonTitle,
    IonButton, 
    IonIcon,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonFooter,
    CommonModule,
    IonModal
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class UserProfileModalComponent  implements OnInit {

  defaultAvatars: string[] = []; // arr of avatar
  selectedAvatar: string| null = '';
  @Input() currentPhoto: string = '';

  constructor(private modalCtrl: ModalController) { }

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
    this.selectedAvatar = avatarPath;
  }

  // close the modal
  dismiss() {
    return this.modalCtrl.dismiss(null, 'close');
  }

  // cancel the changes 
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  async save() {
    await this.modalCtrl.dismiss({
      photo: this.selectedAvatar || this.currentPhoto
    }, 'save');
  }

}
