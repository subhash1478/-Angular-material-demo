import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { LoginRoutingModule } from './login-routing.module';
 import { ReactiveFormsModule } from '@angular/forms';

import { LoginpageComponent } from './loginpage/loginpage.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
  @NgModule({
  imports: [
    CommonModule,MaterialModule,ReactiveFormsModule,
    LoginRoutingModule,FormsModule,
 
  ],
  declarations: [LoginpageComponent]
})
export class LoginModule { }
