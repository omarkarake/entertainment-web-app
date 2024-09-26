import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../auth-pages/auth.guard';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [HomeRoutingModule],
  exports: [RouterModule],
  declarations: [],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
