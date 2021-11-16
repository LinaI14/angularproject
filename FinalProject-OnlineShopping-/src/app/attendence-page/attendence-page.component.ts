import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateAttendenceComponent } from '../create-attendence/create-attendence.component';
import { AttendenceService } from '../service/attendence.service';

@Component({
  selector: 'app-attendence-page',
  templateUrl: './attendence-page.component.html',
  styleUrls: ['./attendence-page.component.css']
})
export class AttendencePageComponent implements OnInit {


  constructor(private router: Router, public attendenceService: AttendenceService,
    private dialog: MatDialog) { }
  ngOnInit(): void {
    this.getAllAttendence();
  }
  getAllAttendence() {

    this.attendenceService.getAllAttendence().subscribe((x: any) => { this.attendenceService.data = x }, err => { ("attendenceError") })

  }

  // createAttendence(){
  //   this.dialog.open(CreateAttendenceComponent)
  // }

  createAttendence(){
    const dialogRef = this.dialog.open(CreateAttendenceComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (!result.id && result){
        this.attendenceService.CreateAttendence(result);

      }
      
    });
  }

}
