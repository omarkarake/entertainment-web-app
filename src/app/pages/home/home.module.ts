import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../auth-pages/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Protect the home route with AuthGuard
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] }, // Protect the home route with AuthGuard
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class HomeRoutingModule {}
