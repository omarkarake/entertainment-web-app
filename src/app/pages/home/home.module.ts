import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../auth-pages/auth.guard';
import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { BookmarkedComponent } from './bookmarked/bookmarked/bookmarked.component';
import { TvSeriesComponent } from './tv-series/tv-series/tv-series.component';
import { CommonModule } from '@angular/common';
import { BookmarkComponent } from '../../components/bookmark/bookmark.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  imports: [HomeRoutingModule, CommonModule],
  exports: [RouterModule],
  declarations: [
    MainComponent,
    BookmarkedComponent,
    MoviesComponent,
    TvSeriesComponent,
    BookmarkComponent,
  ],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
