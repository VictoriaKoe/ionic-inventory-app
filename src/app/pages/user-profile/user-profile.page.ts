import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { UserProfilePopoverComponent } from 'src/app/components/user-profile-popover/user-profile-popover.component';

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

  // default val 
  pronoun: any = '-';
  profilePhoto: any = "https://ionicframework.com/docs/img/demos/avatar.svg";

  showPassword: boolean = false;

  constructor(private router: Router, private popoverCtrl: PopoverController) { }

  ngOnInit() {

    // this.pronoun = [
    //   "Male",
    //   "Female"
    // ];

    // get actual data from database


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

  // edit profile photo
  async editProfilePhoto(event: any) {

    const popover = await this.popoverCtrl.create({
      component: UserProfilePopoverComponent,
      event: event,
      translucent: true,
      dismissOnSelect: true,
      arrow: true,
      backdropDismiss: true,
      cssClass: 'avatar-popover'
    });

    await popover.present();

    const { data } = await popover.onDidDismiss(); // get data when popover dismiss

    if (data) {

      // render profile photo 
      this.profilePhoto = data;

      // todo: save to db


    }


  }

}
