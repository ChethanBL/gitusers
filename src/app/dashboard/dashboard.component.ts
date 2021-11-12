import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClientCallService } from "../service/http-client-call.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  constructor(
    private httpClientCallService: HttpClientCallService,
    private httpClient: HttpClient,
    private router: Router
  ) {}
  users_list: any;
  search_user: any;
  search_user_res: any;

  showsingleuser=false;


  ngOnInit(): void {
  
    
      console.log("this", this.search_user);
     
      if(this.search_user==undefined){
        this.httpClientCallService.getUsersList().subscribe((data) => {
          this.users_list = data;
          console.log("user list", this.users_list);
        });
      }   
  }

  getUser(): any {
    let name = this.search_user.split(" ").join("");
    console.log("name", name);
    this.httpClient.get<any>(`https://api.github.com/users/${name}`).subscribe(
      (res) => {
        if (res) {
          let a:any[]=[];
          this.search_user_res = res;
          a.push(res);
          this.users_list=a;
          this.showsingleuser=true;
          console.log("this",this.users_list)
          console.log(res);
        }
      },
      (error) => {
        console.log("oops", error);
        alert(name + 'user not found');
      }
    );
  }

  viewUser(seleted_user){
    console.log("view", seleted_user)
    this.httpClientCallService.seleted_user.next(seleted_user);
    this.router.navigate(['user'])
  }
  reload()
  {
    console.log('clear')
  }
}
