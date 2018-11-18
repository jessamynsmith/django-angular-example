import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
// import 'rxjs/add/operator/share';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: Observable<string>;
  private _token: string = null;
  private _tokenObserver: any;

  constructor() {
    this.token = new Observable(observer => {
      this._tokenObserver = observer;
    });
  }

  // Current used when the service cannot be injected, or when it is more convenient
  // not to work with an Observable. There may be a more elegant solution.
  static getToken() {
    return localStorage.getItem('access_token');
  }

  setToken(token) {
    this._token = token;
    localStorage.setItem('access_token', token);
    this._tokenObserver.next(this._token);
  }

  removeToken() {
    this._token = null;
    localStorage.removeItem('access_token');
    this._tokenObserver.next(this._token);
  }
}
