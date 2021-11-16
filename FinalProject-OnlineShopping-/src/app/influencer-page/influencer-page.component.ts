import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateInfluencerComponent } from '../create-influencer/create-influencer.component';
import { ReportSaleForEachinfluencerComponent } from '../report-sale-for-eachinfluencer/report-sale-for-eachinfluencer.component';

import { RepotInfluencerComponent } from '../repot-influencer/repot-influencer.component';
import { InfluencerService } from '../service/influencer.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-influencer-page',
  templateUrl: './influencer-page.component.html',
  styleUrls: ['./influencer-page.component.css']
})
export class InfluencerPageComponent implements OnInit {

  constructor(private router: Router, public influencerService: InfluencerService, private dialog: MatDialog
    , public productservice: ProductService,
    public searchInfluencer: InfluencerService) { }
  ngOnInit(): void {
    this.getAllInfluencer();
  }
  getAllInfluencer() {

    this.influencerService.getAllInfluencer().subscribe((x: any) => { this.influencerService.data = x }, err => { ("influencerError") })

  }


  //private dialog:MatDialog
  // CreateInfluencer(){
  //   this.dialog.open(CreateInfluencerComponent)
  //   }


  getInfluencerById(e: any) {
    // id:number = parseInt
    debugger
    let id = parseInt(e.target.value)
    this.influencerService.getInfluencerById(id);
  }

  searchInfluencerName(name: any) {
    // id:number = parseInt
    debugger
    // let  name =(name.target.value).toString
    this.influencerService.searchInfluencerName(name.target.value);
  }

  ReportBuyInfluencer(e: any) {
    // id:number = parseInt
    debugger
    let id = parseInt(e.target.value)
    this.influencerService.ReportBuyInfluencer(id);
  }

  ReportSaleForEachInfluencer(e: any) {
    // id:number = parseInt
    debugger
    let id = parseInt(e.target.value)
    this.influencerService.ReportSaleForEachInfluencer(id);
  }

  ReportSaleInfluencer() {
    this.dialog.open(RepotInfluencerComponent)
  }

  createInfluencer() {
    const dialogRef = this.dialog.open(CreateInfluencerComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (!result.id && result) {
        this.influencerService.createInfluencer(result);

      }

    });
  }

}
