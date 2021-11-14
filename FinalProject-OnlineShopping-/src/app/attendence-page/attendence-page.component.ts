import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendenceService } from '../service/attendence.service';

@Component({
  selector: 'app-attendence-page',
  templateUrl: './attendence-page.component.html',
  styleUrls: ['./attendence-page.component.css']
})
export class AttendencePageComponent implements OnInit {

  
  constructor(private router:Router,public attendenceService : AttendenceService) { }
  ngOnInit(): void {
    this.getAllAttendence();
  }
  getAllAttendence()

  {

this.attendenceService.getAllAttendence().subscribe((x:any)=>{this.attendenceService.data=x},err=>{("attendenceError")})




  }
}
