import { Component, OnInit } from '@angular/core';
import {RequestService} from '../request.service';
import{Request} from '../request.class';
import{SystemService} from '../../system/system.service';
@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  request: Request;

  constructor(private Requestsvc: RequestService,
    private sservice: SystemService) { }

    ngOnInit() {
      this.Requestsvc.list()
      .subscribe(pass =>{
        console.log(pass)
        this.Request = pass;
      })
    }
  
  }
