import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    currentUser: any = null;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.authService.getAuthState().subscribe(user => {
            if (user) {
                this.currentUser = user;
            } else {
                this.currentUser = null;
            }
        });
    }

    isLoggedIn() {
        if (this.currentUser && this.currentUser.displayName) {
            console.log(this.currentUser.displayName);
            return true;
        } else {
            console.log('no display name');
            return false;
        }
    }

    loginWithGoogle() {
        this.authService.loginWithGoogle();
    }

    logOut() {
        this.authService.logOut();
    }

}
