import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToShop(){
    this.router.navigate(['shop']);
}

goToCart()
{
  this.router.navigate(['cart']);
}
goToCheckout()
{
  this.router.navigate(['checkout']);
}
}
