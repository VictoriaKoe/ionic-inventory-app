import { Component, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  // initialise default val
  username: String = '';
  password: String = '';
  showPassword: Boolean = false;

  constructor() { }

  ngOnInit() {}



}
