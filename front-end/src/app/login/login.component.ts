import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model = {
    username: '',
    password: ''
  };

  submitted = false;

  onSubmit() {
    // submit to backend here
    console.log('model', this.model);
    this.submitted = true;
  }

}
