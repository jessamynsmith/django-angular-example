import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'http://127.0.0.1:8000';

  constructor(private httpClient: HttpClient) { }

  login(model) {
    return this.httpClient.post(`${this.API_URL}/api-token-auth/`, model);
  }
}
