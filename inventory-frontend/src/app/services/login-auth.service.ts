import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavController } from '@ionic/angular';
import { User } from 'firebase/auth';
import { NotificationService } from './notification.service';

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
    private navCtrl: NavController,
    private fireStore: AngularFirestore,
    private notiService: NotificationService,
  ) {}

  // user login
  async login(userEmail: string, password: string) {
    
    this.email = userEmail;
    this.password = password;
    
    // Firebase authentication
    return this.ngFireAuth.signInWithEmailAndPassword(this.email, this.password)
  }

  // user logout
  async logout() {
    // user logout
    this.isAuthenticated = false;
    
    await this.ngFireAuth.signOut()
    .then(() => {
      // clear email, passs
      this.email = '';
      this.password = '';
      console.log(this.email, this.password);

      // return to login page after user logout
      this.navCtrl.navigateRoot('/login');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error:', errorCode, errorMessage);  
    });
    
  }

  // forget password
  async resetPassword(recoverEmail: string) {
    // send email request from firebase to the registered email
    await this.ngFireAuth.sendPasswordResetEmail(recoverEmail);

    // send email then navigate back to login
    this.navCtrl.navigateRoot(['/login']);
  }

  // register user
  async registerUser(registerUser: any) {

    this.email = registerUser.newEmail;
    this.password = registerUser.newPassword;

    console.log(this.email, this.password);

    return this.ngFireAuth.createUserWithEmailAndPassword(this.email, this.password)
  }

  // check user is logged in
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // get current user
  getCurrentUser(): any {
    return new Promise<User | null>((resolve, reject) => {
      this.ngFireAuth.onAuthStateChanged(user => {
        if (user) {
          resolve(user as User);
        } else {
          resolve(null);
        }
      }, reject);
    })

  }
  
}
