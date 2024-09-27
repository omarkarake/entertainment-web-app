import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../auth-pages/auth.guard';
import { HomeResolver } from './home.resolver';
import { MainComponent } from './main/main.component';
import { BookmarkedComponent } from './bookmarked/bookmarked/bookmarked.component';
import { MoviesComponent } from './movies/movies/movies.component';
import { TvSeriesComponent } from './tv-series/tv-series/tv-series.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: { mediaItems: HomeResolver },
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
      { path: 'bookmarked', component: BookmarkedComponent },
      { path: 'movies', component: MoviesComponent },
      {path: 'tv-series', component: TvSeriesComponent},  
    ],
  },
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
