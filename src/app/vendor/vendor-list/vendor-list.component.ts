import { Component, OnInit } from '@angular/core';
import {VendorService} from '../vendor.service';
import{Vendor} from '../Vendor.class';
import{SystemService} from '../../system/system.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})

export class VendorListComponent implements OnInit {

  vendors:Vendor[];

  searchCriteria: string = "";

  constructor(private Vendorsvc: VendorService,
     private sservice: SystemService) { }

  ngOnInit() {
    this.Vendorsvc.list()
    .subscribe(pass =>{
      console.log(pass)
      this.vendors = pass;
    })
  }

}
