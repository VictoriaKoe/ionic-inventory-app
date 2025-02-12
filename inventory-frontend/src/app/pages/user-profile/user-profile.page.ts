import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { UserProfileModalComponent } from 'src/app/components/user-profile-modal/user-profile-modal.component';
import { UserViewService } from 'src/app/services/user-view.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
  standalone: false
})
export class UserProfilePage implements OnInit {

  // declare var

  // dummy data, get from db
  username: string = 'Vic'; 
  email: string = 'vic@gmail.com';
  password: string = '12345';
  name: string = "Rui En";
  userData: any[] = [];

  // default val 
  pronoun: any = '-';
  profilePhoto: any = "https://ionicframework.com/docs/img/demos/avatar.svg";

  // toogle pass
  showPassword: boolean = false;

  constructor(
    private router: Router, 
    private popoverCtrl: PopoverController, 
    private modalCtrl: ModalController,
    private userViewService: UserViewService,
  ) {}

  ngOnInit() {

    // reset user data array to prevent previous data save in the var
    this.userViewService.clearUserData(); 
    // get actual data from database
    this.userData = this.userViewService.getUserDataArray();
    console.log(this.userData);

  }

  // go to edit profile form 
  // todo: create edit profile form
  editProfile() {
    this.router.navigate(['/editProfile']);
  }

  // toogle pasword visibilty
  toggleVisibilityPassword () {
    // toogle password visibility
    this.showPassword = !this.showPassword;
  }

  // mask the password
  maskPassword (password: string): string {
    return '*'.repeat(password.length); // repeat * 
  }

  async openEditProfile() {
    // create modal 
    const modal = await this.modalCtrl.create ({
      component: UserProfileModalComponent,
      componentProps: {
        currentPhoto: this.profilePhoto
      }
    });

    // show modal
    modal.present();

    // get data from modal controller
    const {data, role} = await modal.onWillDismiss();

    // render photo
    if (role == 'save') {
      // render photo 
      this.profilePhoto = data.photo;

      // todo: save to db
      
      // get user ref 
      
    }
  }
}
