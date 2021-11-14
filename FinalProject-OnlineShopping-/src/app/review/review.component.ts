import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewService } from '../service/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private router:Router, public reviewservice : ReviewService) { }

  ngOnInit(): void {
    this.getAllReview();
  }
  getAllReview()

  {

this.reviewservice.getAllReview().subscribe((x:any)=>{this.reviewservice.data=x},err=>{("errorReview")})


  }

}
