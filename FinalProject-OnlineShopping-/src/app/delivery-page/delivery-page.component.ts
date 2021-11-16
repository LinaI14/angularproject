import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateDeliveryComponent } from '../create-delivery/create-delivery.component';



import { DeliveryService } from '../service/delivery.service';

@Component({
  selector: 'app-delivery-page',
  templateUrl: './delivery-page.component.html',
  styleUrls: ['./delivery-page.component.css']
})
export class DeliveryPageComponent implements OnInit {

  constructor(private router: Router, public DeliveryService: DeliveryService,private dialog: MatDialog) { }
  ngOnInit(): void {
    this.GetAllDelivery();
  }
  GetAllDelivery() {

    this.DeliveryService.GetAllDelivery().subscribe((x: any) => { this.DeliveryService.data = x }, err => { ("influencerError") })
  }

  getDeliveryById(e:any){
    // id:number = parseInt
    debugger
    let  id =  parseInt (e.target.value)
    this.DeliveryService.getDeliveryById(id);
  }



    createDelivery(){
      const dialogRef = this.dialog.open(CreateDeliveryComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        if (!result.id && result){
          this.DeliveryService.createDelivery(result);
  
        }
        
      });
    }
  

}


