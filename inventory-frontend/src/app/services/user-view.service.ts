import {Injectable } from '@angular/core';
import { LoginAuthService } from './login-auth.service';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class UserViewService {

  private userData: any[] = [];
  private username: string = '';
  private userId: any;

  constructor(
    private authService: LoginAuthService,
    private firestore: Firestore
  ) {
      // get user id 
      this.authService.getCurrentUser()
      .then((user: { uid: any; }) => {
        this.userId = user?.uid;
        console.log(user?.uid);
      })
      .catch((error: any) => {
        console.error('Error getting user profile:', error);
      });
  }

  // get user data
  async getUserData() {
    try {
      
      // get the current user id
      const user = await this.authService.getCurrentUser();
        
      if (!user) {
        console.log('No user found');
        return;
      }
  
      this.userId = user.uid;
      console.log(this.userId);
      
      if (!this.userId) {
        console.log('No user ID available');
        return;
      }

      if (!this.userId) {
        console.log('No user ID available');
        return;
      }

      const userRef = doc(this.firestore, 'users', this.userId);
      // get current user fields from firestore
      const userSnap = await getDoc(userRef);
      console.log(userSnap);

      // check doc exists
      if (userSnap.exists()) {
        const data = userSnap.data();
        // get user data from firestore
        this.userData.push(data);
        // set username
        this.setUsername(this.userData[0].username);
      } else {
        console.log("No such document!");
      }

    } catch (error) {
      console.error('Error in getUserData:', error);
    }
  }

  getUserDataArray() {
    // get data 
    this.getUserData();
    return this.userData;
  }

  // set user data 
  setUserData(newUserData: any): void {
    this.userData.push(newUserData);
  }

  // clear user data 
  clearUserData(): void {
    this.userData = [];
  }

  // get username
  getUsername(): string {
    return this.username;
  }

  // set username
  setUsername(username: string): void {
    this.username = username;
  }

  getUserID(): string {
    return this.userId;
  }
}
