import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DeliveryService } from '../service/delivery.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  @Input () deliveryId:number|undefined;
  @Input () deliveryName:string|undefined;
  @Input () email:string|undefined;
  @Input () phone:string|undefined;
  @Input () address:string|undefined;
  @Input () image:string|undefined;
  @Input () salary:number|undefined;
  @Input () attendence:string|undefined;
  @Input () login:string|undefined;
  @Input () orderProduct:string|undefined;

  constructor(private router:Router, public DeliveryService : DeliveryService,
    private toast:ToastrService ,
    private spiner: NgxSpinnerService,
    ) { }

  ngOnInit(): void {
  }

  DeleteItemDelivery() {
    if (this.deliveryId) {
      debugger
      this.DeliveryService.DeletebyIDelivery(this.deliveryId);
      this.toast.success('Deleted Item ^_^');
    }
    else {
      this.toast.warning('This item cannot be deleted :(')
    }
    window.location.reload();
  }
}
