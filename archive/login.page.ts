// import { Component, OnInit } from '@angular/core';
// // import router
// import { Router } from '@angular/router';
// import { LoginAuthService } from 'src/app/services/login-auth.service';
// import { NotificationService } from 'src/app/services/notification.service';


// @Component({
//   selector: 'app-login',
//   templateUrl: './login.page.html',
//   styleUrls: ['./login.page.scss'],
//   standalone: false,
// })

// export class LoginPage implements OnInit {

//   // initialise default val
//   userEmail: string = '';
//   password: string = '';

//   constructor(
//     private router: Router,
//     private loginAuthService: LoginAuthService,
//     private notiService: NotificationService
//   ) {}

//   ngOnInit() {}

//   // action after clicking sign in button
//   async onSubmit(){
//     console.log(this.userEmail, this.password);

//     try {
//       // todo: validate from db
//       if (await this.loginAuthService.login(this.userEmail, this.password)) {
//         await this.notiService.showSuccess('Login successful');
//         // route to main page
//         this.router.navigate(['/main']);
//       }
//     }
//     catch (error) {
//       let message = 'Login failed. Please try again.';
    
//       if (error instanceof Error) {
//         // matches auth error message
//         const matches = error.message.match(/\((.*?)\)/);

//         switch (matches ? matches[1] : null) {
//           case 'auth/invalid-credential':
//             message = 'Invalid email/password. Please try again.';
//             break;
//           case 'auth/user-not-found':
//             message = 'User not found. Please check your registered email.';
//             break;
//           case 'auth/invalid-email':
//             message = 'Invalid email format/missing email. Please try again';
//             break;
//           case 'auth/missing-password':
//             message = 'Please enter password.';
//             break;
//           default:
//             message = 'Login failed. Please try again.';
//         }
//       }

//       await this.notiService.showError(message);
//     }
//   }

//   // route to register form
//   onRegister(){
//     this.router.navigate(['/register']);
//   }

//   // route to forget password 
//   forgetPassword() {
//     this.router.navigate(['/forget-password']);
//   }

// }
