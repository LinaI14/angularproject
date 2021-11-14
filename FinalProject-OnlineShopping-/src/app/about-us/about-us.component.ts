import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AboutusService } from '../service/aboutus.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  @Input () aboutUsId:number|undefined;
  @Input () description:string|undefined;
  @Input () adminId:number|undefined;
  @Input () admin:string|undefined;

  constructor(private router:Router,public  aboutusService:AboutusService,private xx:ToastrService) { }
  ngOnInit(): void {
    this.getAllAboutUs();
  }
  getAllAboutUs()

  {

this.aboutusService.getAllAboutUs().subscribe((x:any)=>{this.aboutusService.data=x},err=>{this.xx.error("dffffffsds")})




  }

}
