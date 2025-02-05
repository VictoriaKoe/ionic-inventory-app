import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserViewService {

  private userData: any[] = [];
  private username: string = '';

  constructor() {}

  // get user data
  getUserData(): any[] {
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

}
