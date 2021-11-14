import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  // @Input () cartId:number|undefined;
  // @Input () startDate:string|undefined;
  // @Input () endDate:string|undefined;
  // @Input () image:string|undefined;
  // @Input () totalPrice:number|undefined;
  // @Input () orderId:number|undefined;
  // @Input () orderProduct:number|undefined;
  // @Input () productId:number|undefined;
  // @Input () product:number|undefined;
  // @Input () payment:string|undefined;

 
  constructor(private router:Router,public cartService : CartService) { }
  
  ngOnInit(): void {
   this.getAllCart();
  }

  getAllCart()

  {

this.cartService.getAllCart().subscribe((x:any)=>{this.cartService.data=x},err=>{("cartError")})




  }




  goToShop(){
    this.router.navigate(['shop']);
}
goToDetails(){
  this.router.navigate(['product-details']);
}

goToCheckout()
{
  this.router.navigate(['checkout']);
}
  

}
