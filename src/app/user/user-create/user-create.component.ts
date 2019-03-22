import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../user.class';
import {UserService} from '../user.service';
import {SystemService} from '../../system/system.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user:User = new User('','','','','','');
  
  save(): void {
    this.userfred.create(this.user)
      .subscribe(
        fred =>{// sucess
          console.log(fred);
          this.router.navigateByUrl('/user/list');
        },
        err =>{// error
          console.error(err);
        }
      );
  }
  constructor(private userfred: UserService,
     private router:Router, 
     private services:SystemService) { }

  ngOnInit() {
    // let id = this.router.snapshot.params.id;
    // this.userfred.get(id)
    //   .subscribe(fred =>{
    //     console.log(fred);
    //     this.user = fred;
    //   })
  }

}
