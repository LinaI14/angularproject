import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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

  constructor(private router:Router,
    public  aboutusService:AboutusService,
    private toast:ToastrService ,
    private spiner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getAllAboutUs();
  }
  getAllAboutUs()

  {

this.aboutusService.getAllAboutUs().subscribe((x:any)=>{this.aboutusService.data=x},err=>{this.toast.error("dffffffsds")})




  }

  DeleteItemAboutUs() {
    if (this.aboutUsId) {
      debugger
      this.aboutusService.DeletebyIDAboutus(this.aboutUsId);
      this.toast.success('Deleted Item ^_^');
    }
    else {
      this.toast.warning('This item cannot be deleted :(')
    }
    window.location.reload();
  }

}
