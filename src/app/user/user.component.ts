import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { HttpClientCallService } from "../service/http-client-call.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  constructor(
    private httpClientCallService: HttpClientCallService,
    private httpClient: HttpClient
  ) {}

  user: any;
  followes_count: any;
  repo_count:any;

  ngOnInit(): void {
    this.user = this.httpClientCallService.seleted_user.value;
    console.log(this.user);

    this.getfollowers();
    this.getrepo();
  }
  getfollowers() {
    this.httpClient.get<any>(this.user.followers_url).subscribe(
      (res) => {
        if (res) {
          this.followes_count = res.length;
          console.log("follewrs count",this.followes_count);
        }
      },
      (error) => {
        console.log("oops", error);
      }
    );
  }
  getrepo(){

    this.httpClient.get<any>(this.user.repos_url).subscribe(
      (res) => {
        if (res) {
          this.repo_count = res.length;
          console.log("repo_count ",this.repo_count);
        }
      },
      (error) => {
        console.log("oops", error);
      }
    );
  }
}
