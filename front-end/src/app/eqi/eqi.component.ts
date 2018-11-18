import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import {County} from "../models/county"

@Component({
  selector: 'app-eqi',
  templateUrl: './eqi.component.html',
  styleUrls: ['./eqi.component.sass']
})
// TODO this view should only be accessible if logged in
export class EqiComponent implements OnInit {
  counties: County[];
  error: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
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
