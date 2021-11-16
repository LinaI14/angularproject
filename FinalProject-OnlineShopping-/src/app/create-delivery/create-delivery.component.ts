import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeliveryService } from '../service/delivery.service';

@Component({
  selector: 'app-create-delivery',
  templateUrl: './create-delivery.component.html',
  styleUrls: ['./create-delivery.component.css']
})
export class CreateDeliveryComponent implements OnInit {
  formGroup = new FormGroup({
    DeliveryName: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required),
    Phone: new FormControl('', Validators.required),
    Address: new FormControl(''),
    Image: new FormControl('', Validators.required),   
    Salary: new FormControl('', Validators.required),
    UserName: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
    verification: new FormControl('', Validators.required),
   
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public delivery: any, private dialog: MatDialogRef<CreateDeliveryComponent>,
  
    public deliveryService: DeliveryService
  ) { }

  ngOnInit(): void {
    console.log(this.delivery)
    if (this.delivery && this.delivery.id ){
      this.formGroup.controls.deliveryName.setValue(this.delivery.deliveryName);
      this.formGroup.controls.email.setValue(this.delivery.email);
      this.formGroup.controls.phone.setValue(this.delivery.phone);
      this.formGroup.controls.address.setValue(this.delivery.address);
      this.formGroup.controls.image.setValue(this.delivery.image);
      this.formGroup.controls.salary.setValue(this.delivery.salary);
      this.formGroup.controls.userName.setValue(this.delivery.userName);
      this.formGroup.controls.password.setValue(this.delivery.password);
      this.formGroup.controls.verification.setValue(this.delivery.verification);
    }
  }

  SaveItemDelivery(){
    
    const value = this.formGroup.value; 
    
    console.log(value);
    if (this.delivery && this.delivery.deliveryId) {
      this.dialog.close({
        ...value,
        id: this.delivery.id
      })
    } else {
      this.dialog.close(value)
    }
    window.location.reload();
  }

}
