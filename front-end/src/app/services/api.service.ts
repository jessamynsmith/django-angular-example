import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { County } from "../models/county"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL = 'http://127.0.0.1:8000';
  API_URL = this.BASE_URL + '/api/v1';

  constructor(private httpClient: HttpClient) { }

  login(model) {
    return this.httpClient.post(`${this.BASE_URL}/api-token-auth/`, model);
  }

  counties(): Observable<County[]> {
    return this.httpClient.get<County[]>(`${this.API_URL}/counties/`);
  }
}
