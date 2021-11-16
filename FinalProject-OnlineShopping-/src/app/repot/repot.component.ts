import { Component, OnInit,Input } from '@angular/core';
import { ReportService } from '../service/repot.service';


@Component({
  selector: 'app-repot',
  templateUrl: './repot.component.html',
  styleUrls: ['./repot.component.css']
})
export class RepotComponent implements OnInit {

  @Input () influencerName:string|undefined;
  @Input () productName:string|undefined;
  @Input () price:number|undefined;
  @Input () categoryName:string|undefined;

  constructor(public report:ReportService) { }

  ngOnInit(): void {
  }


}
