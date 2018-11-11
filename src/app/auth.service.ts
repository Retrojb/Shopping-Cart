import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
    console.log('AuthService: Logging In');
  }
  logOut() {
    this.isLoggedIn = false;
    console.log('AuthService: Logging out');
  }
  canActivate() {
    return this.isLoggedIn;
  }
}
