import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareddRoutingModule } from './sharedd-routing.module';
import { UserprofileeComponent } from './userprofilee/userprofilee.component';
import { TablelisttComponent } from './tablelistt/tablelistt.component';
import { TypooComponent } from './typoo/typoo.component';
import { IconnComponent } from './iconn/iconn.component';
import { MapssComponent } from './mapss/mapss.component';
import { NotificationnComponent } from './notificationn/notificationn.component';
import { UpgradeeComponent } from './upgradee/upgradee.component';
import { DashboardComponent } from './dashboard/dashboard.component';


// import { TypoComponent } from './typo/typo.component';
// import { UpgradeComponent } from './upgrade/upgrade.component';
// import { UserprofileComponent } from './userprofile/userprofile.component';
// import { TablelistComponent } from './tablelist/tablelist.component';
// import { MapsComponent } from './maps/maps.component';
// import { NotificationComponent } from './notification/notification.component';
// import { IconComponent } from './icon/icon.component';
import {MatCardModule} from '@angular/material/card';
import { DashleftComponent } from './dashleft/dashleft.component';



@NgModule({
  declarations: [
   
  
    UserprofileeComponent,
           TablelisttComponent,
           TypooComponent,
           IconnComponent,
           MapssComponent,
           NotificationnComponent,
           UpgradeeComponent,
           DashboardComponent,
           DashleftComponent
  ],
  imports: [
    CommonModule,
    ShareddRoutingModule,
    MatCardModule
  ]
})
export class ShareddModule { }
