import { TvSeriesComponent } from './pages/home/tv-series/tv-series/tv-series.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BookmarkedComponent } from './pages/home/bookmarked/bookmarked/bookmarked.component';
import { MoviesComponent } from './pages/home/movies/movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookmarkComponent,
    NavigationComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent, 
    BookmarkedComponent,
    MoviesComponent,
    TvSeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // Required for Toastr animations
    ToastrModule.forRoot({
      positionClass: 'toast-top-right', // You can change the position
      timeOut: 3000, // Customize the time for each notification
      preventDuplicates: true,
    }), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
