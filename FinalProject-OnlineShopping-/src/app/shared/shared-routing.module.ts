import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from '../app.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from './shared.module';

const routes: Routes = [
  
  {
    path:'',
    component:NavbarComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
