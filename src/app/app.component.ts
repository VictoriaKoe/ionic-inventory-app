import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {

  // default/dummy val
  username: string = "Vic";
  profilePhoto: string | null = "https://ionicframework.com/docs/img/demos/avatar.svg";


  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Items', url: '/home', icon: 'cube' },
    { title: 'Categories', url: '/home', icon: 'shapes'},
    { title: 'Profile', url: 'user-profile', icon: 'person-circle'},
    // empty pages
    { title: 'Terms & Policy', url: '/', icon: 'document-text'},
    { title: 'Settings', url: '', icon: 'settings'}
    // order
  ];

  constructor() {}

  ngOnInit() {

    // get profile from db (photo & username)
    
  }

}
