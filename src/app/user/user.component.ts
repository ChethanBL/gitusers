import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClientCallService } from "../service/http-client-call.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  constructor(
    private httpClientCallService: HttpClientCallService,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  user: any;
  followes_count: any;
  repo_list:any;
  bio:any;
  work_at:any;
  user_list: any;

  ngOnInit(): void {
    this.user = this.httpClientCallService.seleted_user.value;
    console.log(this.user);
    this.getrepo();
    this.getuserDetails();

  }
 
  getrepo(){

    this.httpClient.get<any>(this.user.repos_url).subscribe(
      (res) => {
        if (res) {
          this.repo_list = res;
          console.log("repo_count ",this.repo_list);
        }
      },
      (error) => {
        console.log("oops", error);
      }
    );
  }
  getuserDetails(){

    this.httpClient.get<any>(this.user.url).subscribe(
      (res) => {
        if (res) {
          this.user_list=res;
        
        this.work_at=res.company;
        console.log(this.work_at);
          console.log("bio ",res.bio)

        }
      },
      (error) => {
        console.log("oops", error);
      }
    );
  }
  homepage()
  {
    this.router.navigate(['Dashboard'])
  }
}
