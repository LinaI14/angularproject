import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashcustomerRoutingModule } from './dashcustomer-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconnComponent } from './iconn/iconn.component';
import { MapssComponent } from './mapss/mapss.component';
import { NotificationnComponent } from './notificationn/notificationn.component';
import { TablelisttComponent } from './tablelistt/tablelistt.component';
import { TypooComponent } from './typoo/typoo.component';
import { UpgradeeComponent } from './upgradee/upgradee.component';
import { UserprofileeComponent } from './userprofilee/userprofilee.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    DashboardComponent,
    IconnComponent,
    MapssComponent,
    NotificationnComponent,
    TablelisttComponent,
    TypooComponent,
    UpgradeeComponent,
    UserprofileeComponent
  ],
  imports: [
    CommonModule,
    DashcustomerRoutingModule,
    MatCardModule
  ]
})
export class DashcustomerModule { }
