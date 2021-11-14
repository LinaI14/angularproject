import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestimonialService } from '../service/testimonial.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor(private router:Router, public testimonialservice : TestimonialService) { }

  ngOnInit(): void {
    this.getAllTestimonial();
  }
  getAllTestimonial()

  {

this.testimonialservice.getAllTestimonial().subscribe((x:any)=>{this.testimonialservice.data=x},err=>{("errorTestimonial")})


  }
}
