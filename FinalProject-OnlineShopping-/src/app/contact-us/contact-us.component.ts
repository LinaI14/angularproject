import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { ContactUsService } from '../service/contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private router:Router,public  ContactUsService:ContactUsService) { }
  ngOnInit(): void {
    this.getAllContactUs();
  }
  getAllContactUs()

  {

this.ContactUsService.getAllContactUs().subscribe((x:any)=>{this.ContactUsService.data=x},err=>{('erroeMessage')})


  }

 

}
