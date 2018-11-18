import { Component, OnInit } from '@angular/core';
import { startWith, delay } from 'rxjs/operators';

import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Django Angular example';
  user_group: string;
  isLoggedIn = false;

  constructor(private authService: AuthService) {
    this.user_group = this.authService.getGroup();
    this.isLoggedIn = !!AuthService.getToken();
  }

  ngOnInit() {
    this.authService.token.pipe(
          delay(0)
      ).subscribe((token) => {
        this.isLoggedIn = !!token;
        this.user_group = this.authService.getGroup();
    });
  }
}
