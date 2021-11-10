import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpClientCallService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  seleted_user: BehaviorSubject<any> = new BehaviorSubject<any>("");
  getUsersList(): any {
    return this.httpClient.get<any>(`https://api.github.com/users`);
  }
}
