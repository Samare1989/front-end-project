import { Component, OnInit } from '@angular/core';
import {Menu} from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Menu[] = [
    new Menu('PRS', '/home','Purchase Request System'),
    new Menu("Users", "/user/list", "List of users"),
    new Menu("Vendors","/vendor/list", "List of vendors"),
    new Menu("Products","/product/list", "List of products"),
    new Menu("Requestst","/request/list", "List of requests"),
    new Menu("Reviews", "/request/review/list", "List of requests to be reviewed"),
    new Menu("About", "/about", "About the Author"),
    new Menu("Login/out", "/Login","Login to PRS"),
  ];
  constructor() { }

  ngOnInit() {
  }

}
