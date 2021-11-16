import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { CreateContactUsComponent } from '../create-contact-us/create-contact-us.component';
import { ContactUsService } from '../service/contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private router:Router,public  ContactUsService:ContactUsService,private dialog:MatDialog) { }
  ngOnInit(): void {
    this.getAllContactUs();
  }
  getAllContactUs()

  {

this.ContactUsService.getAllContactUs().subscribe((x:any)=>{this.ContactUsService.data=x},err=>{('erroeMessage')})


  }

   //private dialog:MatDialog
  //  CreateContactUs(){
  //   this.dialog.open(CreateContactUsComponent)
  //   }
  createContactUs() {
    const dialogRef = this.dialog.open(CreateContactUsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (!result.id && result) {
        this.ContactUsService.CreateContactUs(result);

      }

    });
  }

}
