import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfluencerService } from '../service/influencer.service';

@Component({
  selector: 'app-influencer-page',
  templateUrl: './influencer-page.component.html',
  styleUrls: ['./influencer-page.component.css']
})
export class InfluencerPageComponent implements OnInit {

  constructor(private router:Router, public influencerService : InfluencerService) { }
  ngOnInit(): void {
    this.getAllInfluencer();
  }
  getAllInfluencer()

  {

this.influencerService.getAllInfluencer().subscribe((x:any)=>{this.influencerService.data=x},err=>{("influencerError")})




  }

}
