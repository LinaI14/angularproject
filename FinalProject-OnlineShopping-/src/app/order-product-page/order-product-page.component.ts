import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderProductService } from '../service/order-product.service';

@Component({
  selector: 'app-order-product-page',
  templateUrl: './order-product-page.component.html',
  styleUrls: ['./order-product-page.component.css']
})
export class OrderProductPageComponent implements OnInit {

 
  constructor(private router:Router,public orderProductservice : OrderProductService) { }
  ngOnInit(): void {
    this.getAllOrderProduct();
  }
  getAllOrderProduct()

  {

this.orderProductservice.getAllOrderProduct().subscribe((x:any)=>{this.orderProductservice.data=x},err=>{("orderProducterror")})




  }

}
