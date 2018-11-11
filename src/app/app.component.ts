import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-app';
  loginLabel;
  user;

  constructor(private auth: AuthService, private router: Router) { }
    login() {
    if ( this.loginLabel === 'Log in') {
      this.auth.login();
      this.user = 'Admin';
      this.loginLabel = 'Log out';
    } else {
      this.auth.logOut();
      this.user = 'na';
      this.loginLabel = 'Log in';
        const link = ['/home'];
      this.router.navigate(link);
      }
    }

  }

