import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;
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

  getGroup() {
    if (this.user !== undefined) {
      return this.user.group;
    }
    return localStorage.getItem('user_group');
  }

  setAuthenticated(response) {
    this.user = new User(response['user']);
    localStorage.setItem('user_group', this.user.group);
    this._token = response['token'];
    localStorage.setItem('access_token', this._token);
    this._tokenObserver.next(this._token);
  }

  removeToken() {
    this._token = null;
    localStorage.removeItem('access_token');
    this._tokenObserver.next(this._token);
  }
}
