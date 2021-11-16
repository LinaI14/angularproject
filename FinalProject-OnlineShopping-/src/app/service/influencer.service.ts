import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class InfluencerService {

  headers=["influencerId","fullName","email","phone","address","image"];

  selectedInfluencer:any=[{}];
  data :any =[{}]
 

  constructor( private http:HttpClient,private router:Router,
    private spiner: NgxSpinnerService, private toastr: ToastrService) { }

  getAllInfluencer() {
    return this.http.get('https://localhost:44379/api/Influencer'); 
  }

  DeletebyIDInfluencer(id: number) {
    this.spiner.show();
    debugger
    this.http.delete('https://localhost:44379/api/Influencer/DeleteInfluencer/' + id)
      .subscribe((data: any) => {
        this.spiner.hide();
        this.toastr.success('Deleted ^_^');

      }, err => {
        this.spiner.hide();
        this.toastr.error(err.status);

      })


  }

  // CreateInfluencer(data2: any) {
  //   this.spiner.show();
  //   debugger
  //   this.http.post('https://localhost:44379/api/Influencer', data2).subscribe((res: any) => {
  //     this.toastr.success('Created ^_^');
  //     this.spiner.hide();

  //   }, err => {
  //     this.spiner.hide();
  //     this.toastr.error(' Not Created :(');

  //   })

  // }

  getInfluencerById(id:number){
    debugger
    this.spiner.show();
    this.http.get('https://localhost:44379/api/Influencer/SearchByInfluencerId/'+id).subscribe((data:any)=>{
      // debugger
      this.selectedInfluencer=data;
      console.log(this.selectedInfluencer);
      this.data=this.selectedInfluencer;
      // this.router.navigate(['app']);
      this.spiner.hide();

    },err=>{
      this.spiner.hide();
      this.toastr.error(err.status);
      this.router.navigate(['']);
    })
  }

  
  searchInfluencerName(searchInfluencerDTO : string){
    debugger
    this.spiner.show();
    this.http.get('https://localhost:44379/api/Product/searchInfluencerDTO/'+searchInfluencerDTO).subscribe((data:any)=>{
      debugger
      this.selectedInfluencer=data;
      console.log(this.selectedInfluencer);
      this.data=this.selectedInfluencer;
      // this.router.navigate(['app']);
      this.spiner.hide();

    },err=>{
      this.spiner.hide();
      this.toastr.error(err.status);
      this.router.navigate(['']);
    })
  }

  ReportBuyInfluencer(id : number){
    debugger
    this.spiner.show();
    this.http.get('https://localhost:44379/api/Influencer/ReportBuyInfluencer/'+id).subscribe((data:any)=>{
      debugger
      this.selectedInfluencer=data;
      console.log(this.selectedInfluencer);
      this.data=this.selectedInfluencer;
      // this.router.navigate(['app']);
      this.spiner.hide();

    },err=>{
      this.spiner.hide();
      this.toastr.error(err.status);
      this.router.navigate(['']);
    })
  }

  ReportSaleForEachInfluencer(id : number){
    debugger
    this.spiner.show();
    this.http.get('https://localhost:44379/api/Influencer/ReportSaleForEach/'+id).subscribe((data:any)=>{
      debugger
      this.selectedInfluencer=data;
      console.log(this.selectedInfluencer);
      this.data=this.selectedInfluencer;
      // this.router.navigate(['app']);
      this.spiner.hide();

    },err=>{
      this.spiner.hide();
      this.toastr.error(err.status);
      this.router.navigate(['']);
    })
  }

  createInfluencer(data: any) {
    this.spiner.show();
    this.http.post('https://localhost:44379/api/Influencer', data).subscribe((res: any) => {
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
