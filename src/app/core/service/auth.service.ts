import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public _afa: AngularFireAuth,
    private _Router: Router,
    private _NgZone: NgZone
  ) {
    _afa.onAuthStateChanged(user => {
      if (user) {
        user?.getIdToken().then(idToken => {
          let userObj = {
            user: {
              email: user.email
            },
            token: idToken
          }
          sessionStorage.setItem('userData', JSON.stringify(userObj));
          _NgZone.run(() => {
            this._Router.navigate(['admin']);
          });
        });
      } else {
        _NgZone.run(() => {
          this._Router.navigate(['']);
        });
      }
    })
  }

  signin(email: string, password: string, onSuccess: any, onError: any) {
    this._afa.signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result);
        onSuccess();
        console.log("Login succes");
      })
      .catch(error => {
        console.log(error);
        onError();
      })
  }

  signout() {
    this._afa.signOut()
      .then(() => {
        sessionStorage.setItem('userData', "");
        console.log("Logout succes")
      })
      .catch(error => console.log(error));
  }

  getUserData() {
    let userData = sessionStorage.getItem('userData');
    if (userData) {
      return JSON.parse(userData);
    } else {
      return null;
    }
  }

  signup(email: string, password: string, onSuccess: any, onError: any) {
    this._afa.createUserWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result);
        onSuccess();
      })
      .catch(error => {
        console.log(error);
        onError();
      })
  }
}
