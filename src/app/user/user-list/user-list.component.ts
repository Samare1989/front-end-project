import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import{User} from '../user.class';
import{SystemService} from '../../system/system.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  users:User[];
  searchCriteria: string = "";
  sortCriteria: string = "username";
  sortOrder: string = "asc"; // or anything else for desc

  sortBy(column:string) : void {
    if(this.sortCriteria === column){
      this.sortOrder = this.sortOrder === 'asc' ? ' desc' : 'asc';

     {} else {
      this.sortCriteria = column;
      this.sortOrder = 'asc';
    }
    }
  }

  constructor(private usersvc :UserService,
     private ss : SystemService ) { }

  ngOnInit() {
    this.usersvc.list()
      .subscribe(fred =>{
        console.log(fred);
        this.users = fred;
      });
  }

}

// study note. fred is a variable it can be change by anything.






