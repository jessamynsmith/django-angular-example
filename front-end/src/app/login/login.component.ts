import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

import {ApiService} from "../api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  model = {
    username: '',
    password: ''
  };

  submitted = false;

  onSubmit() {
    this.apiService.login(this.model).subscribe((response) => {
      localStorage.setItem('access_token', response['token']);
      this.router.navigate(['/eqi'])
    });
    this.submitted = true;
  }

}
