import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DahboardpageComponent } from './dahboardpage/dahboardpage.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,MaterialModule,FormsModule,
    DashboardRoutingModule
  ],
  declarations: [DahboardpageComponent]
})
export class DashboardModule { }
