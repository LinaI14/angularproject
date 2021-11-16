import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { InfluencerService } from '../service/influencer.service';

@Component({
  selector: 'app-report-buy-infuencer',
  templateUrl: './report-buy-infuencer.component.html',
  styleUrls: ['./report-buy-infuencer.component.css']
})
export class ReportBuyInfuencerComponent implements OnInit {

  @Input () influencerName:string|undefined;
  @Input () productName:string|undefined;
  @Input () price:number|undefined;
  @Input () qty:string|undefined;
  @Input () totalPrice:number|undefined;
 

  constructor(private router:Router, public reportinfluencer: InfluencerService,
    private toast:ToastrService ,
    private spiner: NgxSpinnerService) { }

  ngOnInit(): void {
  }


}
