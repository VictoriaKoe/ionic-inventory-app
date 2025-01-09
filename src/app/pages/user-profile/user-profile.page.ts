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

  // dummy data
  username: string = 'Vic'; 
  email: string = 'vic@gmail.com';
  password: string = '12345';
  name: string = "Rui En";
  pronoun: any = '-';
  profilePhoto: any = "https://ionicframework.com/docs/img/demos/avatar.svg";

  constructor(private router: Router) { }

  ngOnInit() {

    // this.pronoun = [
    //   "Male",
    //   "Female"
    // ];

  }

  // go to edit profile form 
  // todo: create edit profile form
  editProfile() {
    this.router.navigate(['/editProfile']);
  }

}
