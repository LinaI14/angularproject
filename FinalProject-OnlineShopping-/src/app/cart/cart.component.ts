import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateCartComponent } from '../create-cart/create-cart.component';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {



  constructor(private router: Router, public cartService: CartService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllCart();
  }

  getAllCart() {

    this.cartService.getAllCart().subscribe((x: any) => { this.cartService.data = x }, err => { ("cartError") })


  }
  // CreateCart(){
  //   this.dialog.open(CreateCartComponent)
  //   }
  goToShop() {
    this.router.navigate(['shop']);
  }
  goToDetails() {
    this.router.navigate(['product-details']);
  }

  goToCheckout() {
    this.router.navigate(['checkout']);
  }


 

  CreateCart(){
      const dialogRef = this.dialog.open(CreateCartComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        if (!result.id && result){
          this.cartService.CreateCart(result);
  
        }
        
      });
    }


}
