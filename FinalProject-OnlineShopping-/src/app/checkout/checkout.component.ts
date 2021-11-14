import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToShop(){
    this.router.navigate(['shop']);
}
goToDetails(){
  this.router.navigate(['product-details']);
}
goToCart()
{
  this.router.navigate(['cart']);
}


}