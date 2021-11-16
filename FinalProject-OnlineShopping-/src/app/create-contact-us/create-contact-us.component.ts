import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from '../service/contact-us.service';
import { AccountantService } from '../service/accountant.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-contact-us',
  templateUrl: './create-contact-us.component.html',
  styleUrls: ['./create-contact-us.component.css']
})
export class CreateContactUsComponent implements OnInit {


  formGroup =new FormGroup({
    description:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    subject:new FormControl('',Validators.required),
    adminId:new FormControl(''),
   
  })
  constructor(
    @Inject(MAT_DIALOG_DATA) public contact: any, private dialog: MatDialogRef<CreateContactUsComponent>,
  
    public contactUsService:ContactUsService
  ) { }


  ngOnInit(): void {

    console.log(this.contact)

  
    if (this.contact && this.contact.id ){
      this.formGroup.controls.description.setValue(this.contact.description);
      this.formGroup.controls.name.setValue(this.contact.name);
      this.formGroup.controls.email.setValue(this.contact.email);
      this.formGroup.controls.subject.setValue(this.contact.subject);
      this.formGroup.controls.adminId.setValue(this.contact.adminId);
      this.formGroup.controls.salary.setValue(this.contact.salary);
    }
  }


  
  

  SaveItemContactUs() {
    
    
      const value = this.formGroup.value; 
      console.log(value);
      if (this.contact && this.contact.contactUsId) {
        this.dialog.close({
          ...value,
          id: this.contact.id
        })
      } else {
        this.dialog.close(value)
      }
      window.location.reload();
    }
    
}
