import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProblemsService } from '../service/problems.service';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {
  @Input () problemId:number|undefined;
  @Input () problemDesc:string|undefined;
  @Input () problemStatus:number|undefined;
  @Input () replay:string|undefined;
  @Input () customerId:number|undefined;
  @Input () accountantId:number|undefined;

  @Input () influencerId:number|undefined;
  @Input () customer:string|undefined;
  @Input () accountant:string|undefined;
  @Input () influencer:string|undefined;

 
  constructor(private router:Router, public ProblemService : ProblemsService) { }

  ngOnInit(): void {
  }

}
