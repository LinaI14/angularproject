import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { InfluencerService } from '../service/influencer.service';


@Component({
  selector: 'app-search-influencer-dto',
  templateUrl: './search-influencer-dto.component.html',
  styleUrls: ['./search-influencer-dto.component.css']
})
export class SearchInfluencerDTOComponent implements OnInit {

  @Input () productName:string|undefined;
  @Input () productDesc:string|undefined;
  @Input () image:string|undefined;
  @Input () size:string|undefined;
  @Input () color:string|undefined;
  @Input () price:number|undefined;
  @Input () productNumber:number|undefined;
  @Input () categoryName:string|undefined;
  @Input () fullName:string|undefined;


  constructor(public searchInfluencer:InfluencerService,
    private router:Router,
    private toast:ToastrService ,
    private spiner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  searchInfluencerName(name:any){
    // id:number = parseInt
    debugger
    // let  name =(name.target.value).toString
    this.searchInfluencer.searchInfluencerName(name.target.value);
  }


}
