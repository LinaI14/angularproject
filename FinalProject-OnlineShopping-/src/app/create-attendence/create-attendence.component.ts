import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AttendenceService } from '../service/attendence.service';

@Component({
  selector: 'app-create-attendence',
  templateUrl: './create-attendence.component.html',
  styleUrls: ['./create-attendence.component.css']
})
export class CreateAttendenceComponent implements OnInit {

  formGroup =new FormGroup({
    AttendenceStartDate:new FormControl('',Validators.required),
    AttendenceEndDate:new FormControl('',Validators.required),
    DeliveryId:new FormControl('',Validators.required),
    AccountantId:new FormControl('',Validators.required),
  });



  constructor(
    @Inject(MAT_DIALOG_DATA) public attendence: any, private dialog: MatDialogRef<CreateAttendenceComponent>,
  
    private attendenceservice: AttendenceService 
  ) { }

  ngOnInit(): void {
    console.log(this.attendence)
    if (this.attendence && this.attendence.id ){
      this.formGroup.controls.AttendenceStartDate.setValue(this.attendence.AttendenceStartDate);
      this.formGroup.controls.AttendenceEndDate.setValue(this.attendence.AttendenceEndDate);
      this.formGroup.controls.DeliveryId.setValue(this.attendence.DeliveryId);
      this.formGroup.controls.AccountantId.setValue(this.attendence.AccountantId);
    }
  }
  SaveItemAttendence(){
    
    const value = this.formGroup.value; 
    //value.testimonialId = this.testimonial.testimonialId;
    console.log(value);
    if (this.attendence && this.attendence.attendenceId) {
      this.dialog.close({
        ...value,
        id: this.attendence.id
      })
    } else {
      this.dialog.close(value)
    }
    window.location.reload();
  
  }
    
  
  

}
