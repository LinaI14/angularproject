import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ContactUsService } from '../service/contact-us.service';

@Component({
  selector: 'app-contactus-home',
  templateUrl: './contactus-home.component.html',
  styleUrls: ['./contactus-home.component.css']
})
export class ContactusHomeComponent implements OnInit {
  @Input () contactUsId : number | undefined
  @Input () description : string | undefined
  @Input () name : string | undefined
  @Input () email : string | undefined
  @Input () subject : string | undefined
  @Input () adminId : string | undefined
  @Input () admin : string | undefined
  constructor( private router:Router , public contactUsservice : ContactUsService,
    private toast:ToastrService ,
    private spiner: NgxSpinnerService) {
   
  }

  ngOnInit(): void {
  }

  DeleteItemcontactUs() {
    if (this.contactUsId) {
      debugger
      this.contactUsservice.DeletebyIDContactUs(this.contactUsId);
      this.toast.success('Deleted Item ^_^');
    }
    else {
      this.toast.warning('This item cannot be deleted :(')
    }
    window.location.reload();
  }

}
