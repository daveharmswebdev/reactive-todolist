import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    currentUser: any = null;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

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
            return true;
        } else {
            return false;
        }
    }

    loginWithGoogle() {
        this.authService.loginWithGoogle();
    }

    logOut() {
        this.router.navigate(['/welcome']);
        this.authService.logOut();
    }

}
