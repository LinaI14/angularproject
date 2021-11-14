import { Component, OnInit,Input } from '@angular/core';
import { OrderProductService } from '../service/order-product.service';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {
  @Input () orderId:number|undefined;
  @Input () orderStartDate:string|undefined;
  @Input () orderEndDate:string|undefined;
  @Input () qty:number|undefined;
  @Input () totalPrice:number|undefined;
  @Input () deliveryId:string|undefined;
  @Input () delivery:number|undefined;
  @Input () customerId:number|undefined;
  @Input () customer:string|undefined;
  @Input () influencerId:string|undefined;
  @Input () influencer:number|undefined;
  @Input () orderStatus:number|undefined;
  @Input () cart:string|undefined;
 
  constructor(public orderProductservice : OrderProductService) { }

  ngOnInit(): void {
  }

}
