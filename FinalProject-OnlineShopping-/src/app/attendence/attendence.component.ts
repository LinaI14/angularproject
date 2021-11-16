import { Component, OnInit,Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AttendenceService } from '../service/attendence.service';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {
  @Input () attendenceId:number|undefined;
  @Input () attendenceStartDate:string|undefined;
  @Input () attendenceEndDate:string|undefined;
  @Input () deliveryId:number|undefined;
  @Input () accountantId:number|undefined;
  @Input () delivery:string|undefined;
  @Input () accountant:number|undefined;
 
 
  constructor(public attendenceService : AttendenceService,
    private toast:ToastrService ,
    private spiner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  DeleteItemAttendence() {
    if (this.attendenceId) {
      debugger
      this.attendenceService.DeletebyIDAttendence(this.attendenceId);
      this.toast.success('Deleted Item ^_^');
    }
    else {
      this.toast.warning('This item cannot be deleted :(')
    }
    window.location.reload();
  }


}
