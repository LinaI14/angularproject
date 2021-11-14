import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashleftComponent } from '../sharedd/dashleft/dashleft.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconnComponent } from './iconn/iconn.component';
import { MapssComponent } from './mapss/mapss.component';
import { NotificationnComponent } from './notificationn/notificationn.component';
import { TablelisttComponent } from './tablelistt/tablelistt.component';
import { TypooComponent } from './typoo/typoo.component';
import { UpgradeeComponent } from './upgradee/upgradee.component';
import { UserprofileeComponent } from './userprofilee/userprofilee.component';

const routes: Routes = 
[
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'userprofilee',
    component:UserprofileeComponent
  }
  ,
  {
    path:'tablelistt',
    component:TablelisttComponent
  },
  {
    path:'typoo',
    component:TypooComponent
  },
  {
    path:'iconn',
    component:IconnComponent
  },
  {
    path:'mapss',
    component:MapssComponent
  },
  {
    path:'notificationn',
    component:NotificationnComponent
  },
  {
    path:'upgradee',
    component:UpgradeeComponent
  },
  {
    path:'dash',
    component:DashleftComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashdeliveryRoutingModule { }
