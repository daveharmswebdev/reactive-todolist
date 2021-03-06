import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  authState$: Observable<firebase.User>;
  private _currentUser: firebase.User = null;

  constructor(public afAuth: AngularFireAuth) {
    this.authState$ = this.afAuth.authState;
    this.authState$.subscribe(user => {
      if (user) {
        console.log('user');
        this._currentUser = user;
      } else {
        console.log('no user');
        this._currentUser = null;
      }
    });
  }

  getAuthState() {
    if (this.authState$) {
      return this.authState$;
    } else {
      return Observable.of(null);
    }
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  logOut() {
    return this.afAuth.auth.signOut();
  }
}
