import { Injectable, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService implements OnInit {
    private authState: Observable<firebase.User>;
    private currentUser: firebase.User = null;

    constructor(public afAuth: AngularFireAuth) { }

    ngOnInit() {
        this.authState = this.afAuth.authState;
        this.authState.subscribe(user => {
            if (user) {
                this.currentUser = user;
            } else {
                this.currentUser = null;
            }
        });
    }

    getAuthState() {
        if (this.authState) {
            return this.authState;
        } else {
            return Observable.of(null);
        }
    }
}
