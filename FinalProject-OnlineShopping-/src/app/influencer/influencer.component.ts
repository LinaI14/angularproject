import { Component, OnInit,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { RepotInfluencerComponent } from '../repot-influencer/repot-influencer.component';
import { InfluencerService } from '../service/influencer.service';

@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styleUrls: ['./influencer.component.css']
})
export class InfluencerComponent implements OnInit {
  @Input () influencerId:number|undefined;
  @Input () fullName:string|undefined;
  @Input () email:string|undefined;
  @Input () phone:string|undefined;
  @Input () address:string|undefined;
  @Input () image:string|undefined;
  @Input () category:string|undefined;
  @Input () login:string|undefined;
  @Input () cart:string|undefined;
  @Input () problems:string|undefined;


  @Input () productName:string|undefined;
  @Input () productDesc:string|undefined;

  @Input () size:string|undefined;
  @Input () color:string|undefined;
  @Input () price:number|undefined;
  @Input () productNumber:number|undefined;
  @Input () categoryName:string|undefined;

  constructor(private router:Router, public influencerService : InfluencerService,
    private toast:ToastrService ,
    private spiner: NgxSpinnerService,private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  DeleteItemInfluencer() {
    if (this.influencerId) {
      debugger
      this.influencerService.DeletebyIDInfluencer(this.influencerId);
      this.toast.success('Deleted Item ^_^');
    }
    else {
      this.toast.warning('This item cannot be deleted :(')
    }
    window.location.reload();
  }


}
