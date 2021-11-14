import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router:Router,public  productservice:ProductService,private xx:ToastrService) { }
  ngOnInit(): void {
    this.getAllProduct();
  }
  getAllProduct()

  {

this.productservice.getAllProduct().subscribe((x:any)=>{this.productservice.data=x},err=>{this.xx.error("dffffffsds")})




  }
}
