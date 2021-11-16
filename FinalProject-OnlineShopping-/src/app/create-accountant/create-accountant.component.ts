import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccountantService } from '../service/accountant.service';

@Component({
  selector: 'app-create-accountant',
  templateUrl: './create-accountant.component.html',
  styleUrls: ['./create-accountant.component.css']
})
export class CreateAccountantComponent implements OnInit {

  formGroup = new FormGroup({
    AccountantName: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required),
    Phone: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.required),
    Image: new FormControl('', Validators.required),   
    Salary: new FormControl('', Validators.required),
    UserName: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
    verification: new FormControl('', Validators.required),
   
  });


  // accountantName: any;
  // email: any;
  // phone: any;
  // address: any;
  // image: any;
  // salary: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public accountant: any, private dialog: MatDialogRef<CreateAccountantComponent>,
    private router: Router, public AccountantService: AccountantService) { }

  ngOnInit(): void {
    console.log(this.accountant)

 

    if (this.accountant && this.accountant.id ){
      this.formGroup.controls.accountantName.setValue(this.accountant.accountantName);
      this.formGroup.controls.email.setValue(this.accountant.email);
      this.formGroup.controls.phone.setValue(this.accountant.phone);
      this.formGroup.controls.address.setValue(this.accountant.address);
      this.formGroup.controls.image.setValue(this.accountant.image);
      this.formGroup.controls.salary.setValue(this.accountant.salary);
      this.formGroup.controls.userName.setValue(this.accountant.userName);
      this.formGroup.controls.password.setValue(this.accountant.password);
      this.formGroup.controls.verification.setValue(this.accountant.verification);   
    }
  }


  SaveItemAccountant(){
    
    const value = this.formGroup.value; 
    
    console.log(value);
    if (this.accountant && this.accountant.accountantId) {
      this.dialog.close({
        ...value,
        id: this.accountant.id
      })
    } else {
      this.dialog.close(value)
    }
    window.location.reload();
  }


// data2 :any;
//   SaveItemAccountant() {
//     debugger
//     this.accountantName = this.formGroup.value.AccountantName;
//     this.email = this.formGroup.value.Email;
//     this.phone = this.formGroup.value.Phone;
//     this.address = this.formGroup.value.Address;
//     this.image = this.formGroup.value.Image;
//     this.salary = this.formGroup.value.Salary;

//     const data2 = {
//       AccountantName: this.accountantName.toString(),
//       Email: this.email.toString(),
//       Phone: this.phone.toString(),
//       Address: this.address.toString(),
//       Image: this.image.toString(),
//       Salary: parseInt(this.salary),

//     }

//     this.AccountantService.CreateAccountant(data2);
    
//     window.location.reload();

//   }

}
