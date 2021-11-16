import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {

  selectedAttendence:any=[{}];
  data :any =[{}]

  constructor( private http:HttpClient,private router:Router,
    private spiner: NgxSpinnerService, private toastr: ToastrService) { }

  getAllAttendence() {
    return this.http.get('https://localhost:44379/api/Attendence'); 
  }

  DeletebyIDAttendence(id: number) {
    this.spiner.show();
    debugger
    this.http.delete('https://localhost:44379/api/Attendence/DeleteAttendence/' + id)
      .subscribe((data: any) => {
        this.spiner.hide();
        this.toastr.success('Deleted ^_^');

      }, err => {
        this.spiner.hide();
        this.toastr.error(err.status);

      })


  }

  CreateAttendence(data: any) {
    this.spiner.show();

    this.http.post('https://localhost:44379/api/Attendence/', data).subscribe((res: any) => {
      this.spiner.show();
     if(res){
       this.toastr.success('Created ^_^');
       window.location.reload();
     }else {
       this.toastr.error('Could not create the item');
     }
     this.spiner.hide();
  
    }, err => {
      this.spiner.hide();
      this.toastr.error(' Not Created :(');
      console.log(err);
  
    })
    
    

  }

}
