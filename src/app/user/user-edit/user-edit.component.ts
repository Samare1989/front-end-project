import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';       
import {User} from '../user.class';
import {ActivatedRoute, Router} from '@angular/router';
import {SystemService} from '../../system/system.service';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
user: User;

save():void{
this.usersvc.change(this.user)
.subscribe(
  fred=>{
    console.log(" User Update Sucessfull:" ,fred);
    this.router.navigateByUrl('/user/list');
    err =>{
      console.log("User Update Error:",err);
}

}
);
}
  constructor(
    private usersvc:UserService,
    private route:ActivatedRoute,
    private systems:SystemService,
    private router: Router

) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id)
    .subscribe(
      fred => {//if sucessful
      console.log(fred);
      this.user = fred;

  },
    err =>{
      console.error(err);
  }
  );
  }

}
