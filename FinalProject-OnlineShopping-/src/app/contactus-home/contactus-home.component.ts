import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ContactUsService } from '../service/contact-us.service';

@Component({
  selector: 'app-contactus-home',
  templateUrl: './contactus-home.component.html',
  styleUrls: ['./contactus-home.component.css']
})
export class ContactusHomeComponent implements OnInit {
  @Input () contactUsId : number | undefined
  @Input () description : string | undefined
  @Input () adminId : string | undefined
  @Input () admin : string | undefined
  constructor( private router:Router , public contactUsservice : ContactUsService) {
   
  }

  ngOnInit(): void {
  }

}
