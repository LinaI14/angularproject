import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  @Input () cartId:number|undefined;
  @Input () startDate:string|undefined;
  @Input () endDate:string|undefined;
  @Input () image:string|undefined;
  @Input () totalPrice:number|undefined;
  @Input () orderId:number|undefined;
  @Input () orderProduct:number|undefined;
  @Input () productId:number|undefined;
  @Input () product:number|undefined;
  @Input () payment:string|undefined;

 
  
  constructor(private router:Router,public cartService : CartService) { }
  
  ngOnInit(): void {

  }

}
