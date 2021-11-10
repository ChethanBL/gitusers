import { Component, OnInit } from '@angular/core';
import { HttpClientCallService } from '../service/http-client-call.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private httpClientCallService: HttpClientCallService,
  ) { }
  users_list: any;
  ngOnInit(): void {

    this.httpClientCallService.getUsersList().subscribe(data => {
      this.users_list = data;
      console.log("user list",this.users_list);
    })
  }
}
