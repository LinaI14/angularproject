import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router:Router, public influencerService : InfluencerService) { }

  ngOnInit(): void {
  }

}
