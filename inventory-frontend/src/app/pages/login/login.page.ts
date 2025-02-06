import { Component, OnInit } from '@angular/core';
// import router
import { Router } from '@angular/router';
import { LoginAuthService } from 'src/app/services/login-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})

export class LoginPage implements OnInit {

  // initialise default val
  userEmail: String = '';
  password: String = '';

  constructor(private router: Router, private loginAuthService: LoginAuthService) {}

  ngOnInit() {}

  // action after clicking sign in button
  onSubmit(){
    console.log(this.userEmail, this.password);

    const userLoginData = {
      email: this.userEmail,
      password: this.password
    };

    // todo: validate from db
    this.loginAuthService.login(userLoginData);
    
    // route to main page
    this.router.navigate(['/main']);
  }

  // route to register form
  onRegister(){
    this.router.navigate(['/register']);
  }

  // route to forget password 
  forgetPassword() {
    this.router.navigate(['/forget-password']);
  }

}
