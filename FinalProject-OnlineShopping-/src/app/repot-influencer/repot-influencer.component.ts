import { Component, OnInit, Input } from '@angular/core';
import { ReportService } from '../service/repot.service';



@Component({
  selector: 'app-repot-influencer',
  templateUrl: './repot-influencer.component.html',
  styleUrls: ['./repot-influencer.component.css']
})
export class RepotInfluencerComponent implements OnInit {
  constructor(public report: ReportService) { }

  ngOnInit(): void {
    this.ReportSaleInfluencer();
  }


  ReportSaleInfluencer() {

    this.report.ReportSaleInfluencer().subscribe((x: any) => { this.report.data = x }, err => { ("influencerError") })

  }


}
