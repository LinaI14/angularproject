import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
 

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToDetails(){
    this.router.navigate(['product-details']);
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
