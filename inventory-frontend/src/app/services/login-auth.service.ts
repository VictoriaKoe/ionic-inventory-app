import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class LoginAuthService {

  // default value
  private isAuthenticated: boolean = false;
  private email: string = '';
  private password: any;

  constructor(
    private ngFireAuth: AngularFireAuth,
    private navCtrl: NavController
  ) {}

  // user login
  async login(userEmail: string, password: string) {
    
    this.email = userEmail;
    this.password = password;
    
    // Firebase authentication
    return this.ngFireAuth.signInWithEmailAndPassword(this.email, this.password)
  }

  // check user is logged in
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // get user email address 
  getEmailAddress(): string {
    return this.email;
  }

  // user logout
  async logout() {
    // user logout
    this.isAuthenticated = false;
    
    await this.ngFireAuth.signOut()
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error:', errorCode, errorMessage);  
    });

    this.email, this.password = '';
    console.log(this.email, this.password);

    // return to login page after user logout
    this.navCtrl.navigateRoot('/login');
  }

  // forget password
  async resetPassword(recoverEmail: string) {
    // send email request from firebase to the registered email
    await this.ngFireAuth.sendPasswordResetEmail(recoverEmail);

    // send email then navigate back to login
    this.navCtrl.navigateRoot(['/login']);
  }

}
