import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user.class';
import {Router} from '@angular/router';
import {SystemService} from '../../system/system.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User
  username:string = '';
  password: string = '';
  message: string = 'Ready to Login';

  login(): void{
    this.usersvc.login(this.username,this.password)
    .subscribe(
      resp =>{
        console.log("login Sucessful!", resp);
        let user = resp;
        this.syssvc.loggedInUser = user;
        this.router.navigateByUrl("/home");
      },
    )
    err => {
      console.error("Login Failed! - Username/Password combination not found.");
      this.message = "Login Failed - Username/Password combination not found.";
    }

  }
  constructor(
    private usersvc :UserService,
    private syssvc:SystemService,
    private router: Router
    
  ) { }

  ngOnInit() {
    this.syssvc.loggedInUser = null; // means user not logged in.
  }

}
