import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import {County} from "../models/county"

@Component({
  selector: 'app-eqi',
  templateUrl: './eqi.component.html',
  styleUrls: ['./eqi.component.sass']
})
export class EqiComponent implements OnInit {
  counties: County[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  getCounties() {
    this.apiService.counties().subscribe((counties) => {
      this.counties = counties;
    });
  }

}
