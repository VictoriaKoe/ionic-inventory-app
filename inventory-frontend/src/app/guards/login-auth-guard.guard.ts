import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { LoginAuthService } from '../services/login-auth.service';

@Injectable({
  providedIn: 'root'
})

// docs: https://angular.dev/api/router/CanActivate

export class AuthGuard implements CanActivate {

  constructor(private authService: LoginAuthService, private route: Router){}

  // interface to decide route can be actived, ret bool
  canActivate(): boolean{
    if (this.authService.isLoggedIn()) {
      return true;
    }
    else{
      // remain at login page
      this.route.navigate(['/login']);
      return false;
    }
  }
}
