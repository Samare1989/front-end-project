import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';       
import {Product} from '../product.class';
import {ActivatedRoute, Router} from '@angular/router';
import {SystemService} from '../../system/system.service';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;

  save():void{
    this.productsvc.change(this.product)
    .subscribe(
      resp=>{
        console.log(" Product Update Sucessfull:" ,resp);
        this.router.navigateByUrl('/product/list');
        err =>{
          console.log(" Product Update Error:",err);
    }
    
    }
    );
    }

  constructor(
    private productsvc:ProductService,
    private route:ActivatedRoute,
    private systems:SystemService,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.productsvc.get(id)
    .subscribe(
      resp => {
      console.log(resp);
      this.product = resp;

  },
    err =>{
      console.error(err);
  }
  );
  }

}
