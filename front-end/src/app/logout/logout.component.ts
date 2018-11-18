import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
      this.authService.removeToken();
      // TODO can the app automatically navigate based on observing removed token?
      this.router.navigate(['/login'])
  }

}
