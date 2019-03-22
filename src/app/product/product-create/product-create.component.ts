import { Component, OnInit } from '@angular/core';
import {Product} from '../product.class';
import {ProductService} from '../product.service';
import {Vendor} from '../../vendor/vendor.class';
import {VendorService} from '../../vendor/vendor.service';
import {SystemService} from '../../system/system.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product(0,'','','','','',false);
  vendors: Vendor [];
  vendor: Vendor;
  route: any;

  save(): void {
  this.psrvice.create(this.product)
  .subscribe(
  bella => {// success
  console.log(bella);
  this.router.navigateByUrl('/product/list');
  },
  err => {// err implies to error
  console.log(`its better to use console.error`);
  console.error(err);
  }
  );
  }
   constructor(private psrvice: ProductService, 
    private ssm: SystemService,
    private vendorsvc: VendorService,
    private router: Router) { }

  ngOnInit() {
    this.vendorsvc.list()
    .subscribe( bella => {
      console.log(bella)
      this.vendors = bella;
    })
     
  }

}
 
//private vservice : VendorService/  import vendor and vendorservice to product because vendorid is foregin key to product.