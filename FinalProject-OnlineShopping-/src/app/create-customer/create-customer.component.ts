import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  formGroup = new FormGroup({
    FullName: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required),
    Phone: new FormControl('', Validators.required),
    Address: new FormControl(''),
    Image: new FormControl('', Validators.required),   
    Salary: new FormControl('', Validators.required),
    UserName: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
    verification: new FormControl('', Validators.required),
   
  });
  constructor(private router:Router, public customerservice:CustomerService,
    @Inject(MAT_DIALOG_DATA) public customer: any, private dialog: MatDialogRef<CreateCustomerComponent>
    ) { }
     
  ngOnInit(): void {
    console.log(this.customer)
    if (this.customer && this.customer.id ){
      this.formGroup.controls.fullName.setValue(this.customer.fullName);
      this.formGroup.controls.email.setValue(this.customer.email);
      this.formGroup.controls.phone.setValue(this.customer.phone);
      this.formGroup.controls.address.setValue(this.customer.address);
      this.formGroup.controls.image.setValue(this.customer.image);
      this.formGroup.controls.salary.setValue(this.customer.salary);
      this.formGroup.controls.userName.setValue(this.customer.userName);
      this.formGroup.controls.password.setValue(this.customer.password);
      this.formGroup.controls.verification.setValue(this.customer.verification);
    }
  }

  SaveItemCustomer(){
    
    const value = this.formGroup.value; 
    
    console.log(value);
    if (this.customer && this.customer.customerId) {
      this.dialog.close({
        ...value,
        id: this.customer.id
      })
    } else {
      this.dialog.close(value)
    }
    window.location.reload();
  }

  
  

  // SaveItemCustomer() {
  //   debugger
  //   this.fullName = this.formGroup.value.FullName;
  //   this.email = this.formGroup.value.Email;
  //   this.phone = this.formGroup.value.Phone;
  //   this.address = this.formGroup.value.Address;
  //   this.image = this.formGroup.value.Image;
    
  //   const data:any = {
  //     FullName: this.fullName.toString(),
  //     Email: this.email.toString(),
  //     Phone: this.phone.toString(),
  //     Address: this.address.toString(),
  //     Image: this.image.toString(),
      
  //   }
  //   this.customerservice.CreateCustomer(data);
  //   window.location.reload();

  // }

}
