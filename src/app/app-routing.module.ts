import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth-pages/auth-pages.module').then(
        (m) => m.AuthPagesModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: 'auth/login' }, // Wildcard route for invalid URLs
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
