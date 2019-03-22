import { Component, OnInit } from '@angular/core';
import{ActivatedRoute, Router} from '@angular/router';
import {VendorService} from '../vendor.service';
import {Vendor} from '../vendor.class';
import {SystemService} from '../../system/system.service';
@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor: Vendor;

  delete():void{
    this.vendorsvc.remove(this.vendor)
    .subscribe(
      resp =>{
        console.log("Vendor Delete Sucessful", resp);
        this.router.navigateByUrl("/vendor/list");
      },
      err => {
        console.error(" Vendor Delete Failed!:", err);
      }
    )
    
  }

  constructor(private vendorsvc:VendorService, 
    private route:ActivatedRoute,
    private ssm:SystemService,
     private router: Router) { }

  ngOnInit() {

    let id = this.route.snapshot.params.id;
    this.vendorsvc.get(id)
      .subscribe(resp =>{
        console.log(resp);
        this.vendor = resp;
      })

  }

}
