import { InputComponent } from './../../components/input/input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthPagesRoutingModule } from './auth-pages-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ButtonComponent } from '../../components/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    InputComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthPagesRoutingModule
  ]
})
export class AuthPagesModule { }
