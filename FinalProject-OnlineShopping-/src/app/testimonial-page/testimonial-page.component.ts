import { Component, OnInit,Input } from '@angular/core';
import { TestimonialService } from '../service/testimonial.service';

@Component({
  selector: 'app-testimonial-page',
  templateUrl: './testimonial-page.component.html',
  styleUrls: ['./testimonial-page.component.css']
})
export class TestimonialPageComponent implements OnInit {
  @Input () testimonialId:number|undefined;
  @Input () image:string|undefined;
  @Input () description:string|undefined;
  @Input () reviewNumber:number|undefined;
  @Input () adminId:number|undefined;
  @Input () admin:string|undefined;
  constructor(public testimonialservice : TestimonialService) { }

  ngOnInit(): void {
  }

}
