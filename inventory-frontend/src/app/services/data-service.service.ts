import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  // firebase url to save data 
  private baseURL = environment.firebaseConfig.databaseURL;
  private apiKey = environment.firebaseConfig.apiKey;

  // Save user data to Firebase
  // send HTTP request
  saveUserData(userData: any) {
    // url to save data 
    const url = `${this.baseURL}/users.json?auth=${this.apiKey}`;
    return this.http.post(url, userData);
  }

  // Get user data from Firebase
  getUserData(userId: string) {
    const url = `${this.baseURL}/users.json?auth=${this.apiKey}`;
    return this.http.get(url);
  }

  

}

