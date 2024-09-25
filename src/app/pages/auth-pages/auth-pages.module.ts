import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthPagesRoutingModule } from './auth-pages-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthPagesRoutingModule
  ]
})
export class AuthPagesModule { }
