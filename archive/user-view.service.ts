// import { inject, Injectable } from '@angular/core';
// import { LoginAuthService } from './login-auth.service';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { doc, docData, Firestore, getDoc, Timestamp } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';

// export interface User {
//   uid?: string;
//   email: string;
//   name: string;
//   password: string;
//   username: string;
//   pronoun: string;
//   avatarURL: string;
//   terms: boolean;
//   createdAt: Timestamp;
//   lastLoginAt: Timestamp;
// }


// @Injectable({
//   providedIn: 'root'
// })

// export class UserViewService {

//   private userData: any[] = [];
//   private username: string = '';
//   private userId: any;
//   // private firestore = inject (AngularFirestore);

//   constructor(
//     private authService: LoginAuthService,
//     private firestore: Firestore
//   ) {
    
//     // this.authService.getCurrentUser()
//     // .then((user: { uid: any; }) => {
//     //   this.userId = user?.uid;
//     //   console.log(user?.uid);
//     // })
//     // .catch((error: any) => {
//     //   console.error('Error getting user profile:', error);
//     // });

//     // // Get user data from Firestore
//     // this.firestore.collection('users').doc(this.userId).get()
//     // .subscribe((snapshot) => {
//     //   console.log(snapshot);
//     //   const data = snapshot.data();
//     //   console.log(data);
//     //   this.userData.push(data);
//     //   console.log(this.userData);
//     // });
//   }

//   // get user data
//   async getUserData() {
//     try {
//       // Get user
//       const user = await this.authService.getCurrentUser();
      
//       if (!user) {
//         console.log('No user found');
//         return;
//       }
  
//       this.userId = user.uid;
//       console.log(this.userId);
      
//       if (!this.userId) {
//         console.log('No user ID available');
//         return;
//       }

//       const userRef = doc(this.firestore, 'users', this.userId);
//       // get current user fields from firestore
//       const userSnap = await getDoc(userRef);
//       console.log(userSnap);

//       // check doc exists
//       if (userSnap.exists()) {
//         const data = userSnap.data();
//         this.userData.push(data);
//       } else {
//         console.log("No such document!");
//       }

//     } catch (error) {
//       console.error('Error in getUserData:', error);
//     }
//   }

//   getUserDataArray() {
//     // get data 
//     this.getUserData();
//     return this.userData;
//   }

//   // set user data 
//   setUserData(newUserData: any): void {
//     this.userData.push(newUserData);
//   }

//   // clear user data 
//   clearUserData(): void {
//     this.userData = [];
//   }

//   // get username
//   getUsername(): string {
//     return this.username;
//   }

//   // set username
//   setUsername(username: string): void {
//     this.username = username;
//   }

// }
