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
    { title: 'Home', url: '/main/home', icon: 'home' },
    { title: 'Items', url: '/main/items', icon: 'cube' },
    { title: 'Categories', url: '/main/categories', icon: 'shapes'},
    { title: 'Profile', url: 'user-profile', icon: 'person-circle'},
    // empty pages
    { title: 'Terms Policy', url: 'terms-policy', icon: 'document-text'},
    { title: 'Settings', url: 'settings', icon: 'settings'}
  ];

  constructor() {}

  ngOnInit() {

    // get profile from db (photo & username)
  }

}
