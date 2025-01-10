import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  profileArray: any = [];

  showPassword: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {

    // this.pronoun = [
    //   "Male",
    //   "Female"
    // ];

    // dummy one
    this.profileArray.push(2);
    console.log(this.profileArray);

    // get data from database


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
  editProfilePhoto() {
  
    
  }
}
