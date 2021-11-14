import { Component, OnInit ,Input} from '@angular/core';
import { ReviewService } from '../service/review.service';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {

  @Input () reviewId:number|undefined;
  @Input () description:string|undefined;
  @Input () product:string|undefined;
  constructor(public reviewservice : ReviewService) { }


  ngOnInit(): void {
  }

}
