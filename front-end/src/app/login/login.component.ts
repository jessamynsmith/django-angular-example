import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

import {ApiService} from "../services/api.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService, private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  model = {
    username: '',
    password: ''
  };

  submitted = false;

  onSubmit() {
    this.apiService.login(this.model).subscribe((response) => {
      this.authService.setAuthenticated(response);
      this.router.navigate(['/eqi']);
    });
    this.submitted = true;
  }

}
