import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DahboardpageComponent } from './dahboardpage/dahboardpage.component';

const routes: Routes = [
  {
    path: '',
    component: DahboardpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
