import { Component, OnInit,Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CreateAccountantComponent } from '../create-accountant/create-accountant.component';
import { AccountantService } from '../service/accountant.service';

@Component({
  selector: 'app-accountant-page',
  templateUrl: './accountant-page.component.html',
  styleUrls: ['./accountant-page.component.css']
})
export class AccountantPageComponent implements OnInit {
  @Input () accountantId:number|undefined;
  @Input () accountantName:string|undefined;
  @Input () email:string|undefined;
  @Input () phone:string|undefined;
  @Input () address:number|undefined;
  @Input () image:string|undefined;
  @Input () salary:number|undefined;
  @Input () login:string|undefined;
  @Input () problems:string|undefined;
  @Input () attendence:string|undefined;
  dialog: any;
  constructor(private toast:ToastrService ,
    private spiner: NgxSpinnerService,
    public AccountantService:AccountantService) { }

  ngOnInit(): void {
  }

  DeleteItemAccountant() {
    if (this.accountantId) {
      debugger
      this.AccountantService.DeletebyIDAccountant(this.accountantId);
      this.toast.success('Deleted Item ^_^');
    }
    else {
      this.toast.warning('This item cannot be deleted :(')
    }
    window.location.reload();
  }

  

}
