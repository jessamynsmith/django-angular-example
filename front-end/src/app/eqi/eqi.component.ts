import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service";
import {County} from "../models/county"
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-eqi',
  templateUrl: './eqi.component.html',
  styleUrls: ['./eqi.component.sass']
})
export class EqiComponent implements OnInit {
  counties: County[];
  error: any;
  group: string;

  constructor(private apiService: ApiService, private authService: AuthService) {
    this.group = this.authService.getGroup();
  }

  ngOnInit() {
  }

  isAdmin() {
    return this.group == 'admin';
  }

  getCounties() {
    this.apiService.counties().subscribe((counties) => {
      this.counties = counties;
    }, (error) => {
      this.error = error;
      console.log('Error retrieving counties:', error);
    });
  }

}
