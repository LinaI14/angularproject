import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProblemsService } from '../service/problems.service';

@Component({
  selector: 'app-problems-page',
  templateUrl: './problems-page.component.html',
  styleUrls: ['./problems-page.component.css']
})
export class ProblemsPageComponent implements OnInit {

  constructor(private router:Router, public ProblemService : ProblemsService) { }
  ngOnInit(): void {
    this.getAllProblems();
  }
  getAllProblems()

  {

this.ProblemService.getAllProblems().subscribe((x:any)=>{this.ProblemService.data=x},err=>{("attendenceError")})




  }

}
