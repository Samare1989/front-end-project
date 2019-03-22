import { Component, OnInit } from '@angular/core';
import{ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';
import {User} from '../user.class';
import {SystemService} from '../../system/system.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  delete():void{
    this.usersvc.remove(this.user)
    .subscribe(
      fred =>{
        console.log("User Delete Sucessful", fred);
        this.router.navigateByUrl("/user/list");
      },
      err => {
        console.error("User Delete Failed!:", err);
      }
    )
    
  }

  constructor(
    private usersvc: UserService, 
    private route:ActivatedRoute,
    private ssm:SystemService,
     private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    
    this.usersvc.get(id)
      .subscribe(fred =>{
        console.log(fred);
        this.user = fred;
      })
  }

}
