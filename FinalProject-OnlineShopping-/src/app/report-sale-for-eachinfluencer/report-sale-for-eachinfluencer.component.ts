import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { InfluencerService } from '../service/influencer.service';
@Component({
  selector: 'app-report-sale-for-eachinfluencer',
  templateUrl: './report-sale-for-eachinfluencer.component.html',
  styleUrls: ['./report-sale-for-eachinfluencer.component.css']
})
export class ReportSaleForEachinfluencerComponent implements OnInit {

   
  @Input () influencerName:string|undefined;
  @Input () productName:string|undefined;
  @Input () price:number|undefined;
  @Input () categoryName:string|undefined;



  constructor(private router:Router, public reportinfluencer: InfluencerService,
    private toast:ToastrService ,
    private spiner: NgxSpinnerService) { }

  ngOnInit(): void {
  }


}
