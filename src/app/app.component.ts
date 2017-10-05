import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user = null;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.getAuthState().subscribe(
      user => {
        this.user = user;
      }
    );
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }

}
