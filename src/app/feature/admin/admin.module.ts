import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminComponent } from './admin.component';
import { AdministratorComponent } from './administrator/administrator.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    AdministratorComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule.forRoot()
  ]
})
export class AdminModule { }
