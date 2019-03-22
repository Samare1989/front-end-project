import { Component, OnInit } from '@angular/core';
import{ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {Product} from '../product.class';
import {SystemService} from '../../system/system.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:Product;

  delete():void{
    this.productsvc.remove(this.product)
    .subscribe(
      bella =>{
        console.log(" Product Delete Sucessful",bella);
        this.router.navigateByUrl("/product/list");
      },
      err => {
        console.error(" Product Delete Failed!:", err);
      }
    )
    
  }
  constructor(private productsvc:ProductService, 
    private route:ActivatedRoute,
    private ssm:SystemService,
     private router: Router) { }

  ngOnInit() {

    let id = this.route.snapshot.params.id;
    this.productsvc.get(id)
      .subscribe(bella =>{
        console.log(bella);
        this. product = bella;
      })

  }

}