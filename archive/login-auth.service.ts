// import { Injectable } from '@angular/core';
// import {AngularFireAuth} from '@angular/fire/compat/auth';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })

// export class LoginAuthService {

//   // default value
//   private isAuthenticated: boolean = false;
//   private email: string = '';
//   private password: any;

//   constructor(
//     private ngFireAuth: AngularFireAuth,
//     private router: Router
//   ) {}

//   // user login
//   async login(userEmail: string, password: string) {
    
//     this.email = userEmail;
//     this.password = password;
    
//     // Firebase authentication
//     await this.ngFireAuth.signInWithEmailAndPassword(this.email, this.password)
//     // .then((userCredential) => {
//     //     // Signed in
//     //     const user = userCredential.user;
//     //     console.log('User signed in:', user);
//     //     // valid user 
//     //     this.isAuthenticated = true;
//     //     console.log(this.isAuthenticated);
//     //     // sign in to page
//     //     this.router.navigate(['/main']);
//     // })
//     // .catch((error) => {
//     //     const errorCode = error.code;
//     //     const errorMessage = error.message;
//     //     console.log('Error:', errorCode, errorMessage);
//     // });
//   }

//   // check user is logged in
//   isLoggedIn(): boolean {
//     return this.isAuthenticated;
//   }

//   // get user email address 
//   getEmailAddress(): string {
//     return this.email;
//   }

//   // user logout
//   async logout() {
//     // user logout
//     this.isAuthenticated = false;
    
//     await this.ngFireAuth.signOut()
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log('Error:', errorCode, errorMessage);  
//     });

//     this.email, this.password = '';
//   }

//   // forget password


//   // set authentication
//   setAuth(newAuth: boolean) {
//     this.isAuthenticated = newAuth;
//   }

 // register user
//  async registerUser(registerUser: any) {

//     this.email = registerUser.newEmail;
//     this.password = registerUser.newPassword;

//     console.log(this.email, this.password);

//     return this.ngFireAuth.createUserWithEmailAndPassword(this.email, this.password)
//   //   .then ((userCredential) => {
//   //     // register successful
//   //     const user = userCredential.user;
//   //     console.log('New registered user:', user);
//   //   })
//   //   .catch((error) => {
//   //     const errorCode = error.code;
//   //     const errorMessage = error.message;
//   //     console.log('Error:', errorCode, errorMessage);
//   // });

//   }



// }
