import { Component, OnInit } from '@angular/core';

import {ApiService} from "../api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  model = {
    username: '',
    password: ''
  };

  submitted = false;

  onSubmit() {
    this.apiService.login(this.model).subscribe((response) => {
      console.log(response);
    });
    this.submitted = true;
  }

}
