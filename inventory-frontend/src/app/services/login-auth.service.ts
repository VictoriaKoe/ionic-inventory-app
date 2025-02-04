import { Injectable } from '@angular/core';
// import * as firebase from '@angular/fire';

@Injectable({
  providedIn: 'root'
})

export class LoginAuthService {

  // default value
  private isAuthenticated: boolean = false;
  private email: string = '';
  private password: any;

  constructor() {}

  // user login
  login(userData: {}) {
    
    this.email, this.password = userData;
    
     // valid user 
     this.isAuthenticated = true;

    // Firebase authentication
    // firebase.auth().signInWithEmailAndPassword(email, password)
    // .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log('User signed in:', user);
    //     // You can redirect the user to another page here, if needed
    //     // Redirect the user to another page (e.g., "dashboard.html")
    //     localStorage.setItem('email', email);
    //     window.location.href = "index.html";
    // })
    // .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log('Error:', errorCode, errorMessage);

    // Display the error message in the login container

    // });
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
  logout(): boolean{
    // user logout
    this.isAuthenticated = false;
    return this.isAuthenticated;
  }

}
