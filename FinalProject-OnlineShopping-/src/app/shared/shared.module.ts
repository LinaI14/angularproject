import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AppModule } from '../app.module';
import { SliderComponent } from './slider/slider.component';
import { MatCardModule } from'@angular/material/card';

import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,
    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    // AppModule
    
  ],
  exports:
  [
    NavbarComponent,
    SliderComponent,
    MatCardModule
  ]
})
export class SharedModule { }
