import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-create-cart',
  templateUrl: './create-cart.component.html',
  styleUrls: ['./create-cart.component.css']
})
export class CreateCartComponent implements OnInit {
  formGroup = new FormGroup({
    startDate:new FormControl('',Validators.required),
    endDate:new FormControl('',Validators.required),
    image:new FormControl('',Validators.required),
    totalPrice:new FormControl('',Validators.required),
    orderId:new FormControl('',Validators.required),
    ProductId:new FormControl('',Validators.required),
  });

  constructor(private router: Router, public cartService: CartService,
    @Inject(MAT_DIALOG_DATA) public cart: any, private dialog: MatDialogRef<CreateCartComponent>) { }
 
  ngOnInit(): void {
    console.log(this.cart)

     
    if (this.cart && this.cart.id ){
      this.formGroup.controls.startDate.setValue(this.cart.startDate);
      this.formGroup.controls.endDate.setValue(this.cart.endDate);
      this.formGroup.controls.image.setValue(this.cart.image);
      this.formGroup.controls.totalPrice.setValue(this.cart.totalPrice);
      this.formGroup.controls.orderId.setValue(this.cart.orderId);
      this.formGroup.controls.productId.setValue(this.cart.productId);
    }
  }

  SaveItemCart(){
    
    const value = this.formGroup.value; 
    //value.testimonialId = this.testimonial.testimonialId;
    console.log(value);
    if (this.cart && this.cart.cartId) {
      this.dialog.close({
        ...value,
        id: this.cart.id
      })
    } else {
      this.dialog.close(value)
    }
    window.location.reload();
  
  }


}
