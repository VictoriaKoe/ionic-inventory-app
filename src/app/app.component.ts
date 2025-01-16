import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  username: string = "";

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Items', url: '/home', icon: 'cube' },
    { title: 'Categories', url: '/home', icon: 'shapes'},
    { title: 'User Profile', url: 'user-profile', icon: 'person-circle'},
    // settings 
    // { title: 'Settings', url: '', icon: 'settings'} 
    // order
  ];

  constructor() {}

}
