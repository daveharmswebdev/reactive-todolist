import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user = null;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.getAuthState().subscribe(
      user => {
        this.user = user;
      }
    );
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

}
