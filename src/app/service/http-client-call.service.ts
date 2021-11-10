import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpClientCallService {

  constructor(
    private httpClient: HttpClient,
  ) { }


  getUsersList(): any {
    return this.httpClient.get<any>(`https://api.github.com/users`);
  }
}
