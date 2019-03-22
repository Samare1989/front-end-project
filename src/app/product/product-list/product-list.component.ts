import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import{Product} from '../product.class';
import{SystemService} from '../../system/system.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private Productsvc: ProductService,
    private sservice: SystemService) { }

    ngOnInit() {
      this.Productsvc.list()
      .subscribe(pass =>{
        console.log(pass)
        this.products = pass;
      })
    }
  
  }
