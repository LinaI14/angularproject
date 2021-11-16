import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InfluencerService } from '../service/influencer.service';

@Component({
  selector: 'app-create-influencer',
  templateUrl: './create-influencer.component.html',
  styleUrls: ['./create-influencer.component.css']
})
export class CreateInfluencerComponent implements OnInit {

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
  constructor(public InfluencerService:InfluencerService,
    @Inject(MAT_DIALOG_DATA) public influencer: any, private dialog: MatDialogRef<CreateInfluencerComponent>) { }

  ngOnInit(): void {
    console.log(this.influencer)
    if (this.influencer && this.influencer.id ){
      this.formGroup.controls.fullName.setValue(this.influencer.fullName);
      this.formGroup.controls.email.setValue(this.influencer.email);
      this.formGroup.controls.phone.setValue(this.influencer.phone);
      this.formGroup.controls.address.setValue(this.influencer.address);
      this.formGroup.controls.image.setValue(this.influencer.image);
      this.formGroup.controls.salary.setValue(this.influencer.salary);
      this.formGroup.controls.userName.setValue(this.influencer.userName);
      this.formGroup.controls.password.setValue(this.influencer.password);
      this.formGroup.controls.verification.setValue(this.influencer.verification);
    }
  }
 
  
  SaveItemInfluencer(){
    
    const value = this.formGroup.value; 
    
    console.log(value);
    if (this.influencer && this.influencer.influencerId) {
      this.dialog.close({
        ...value,
        id: this.influencer.id
      })
    } else {
      this.dialog.close(value)
    }
    window.location.reload();
  }

  // fullName:any;
  // email:any;
  // phone:any;
  // address:any;
  // image:any;
      


  // SaveItemInfluencer() {
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
  //   this.InfluencerService.CreateInfluencer(data);
  //   window.location.reload();

  // }


}
