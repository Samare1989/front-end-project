import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Vendor} from '../vendor.class';
import {VendorService} from '../vendor.service';
import {SystemService} from '../../system/system.service'
@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

vendor: Vendor = new Vendor('','','','','','','','');

  save(): void{
    this.Vsrvice.create(this.vendor)
    .subscribe(
      resp =>{
        console.log(resp);
        this.router.navigateByUrl('vendor/list');
      },
        err => {
       console.error = (err);
      }
    );
  }
 constructor(private Vsrvice: VendorService, 
    private ssm: SystemService,
    private router: Router) { }

  ngOnInit() {
  }

}
