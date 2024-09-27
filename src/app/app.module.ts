import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { mediaReducer } from './store/reducers/media.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MediaEffects } from './store/effects/media.effects';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    BookmarkComponent,
    NavigationComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule, // Required for Toastr animations
    ToastrModule.forRoot({
      positionClass: 'toast-top-right', // You can change the position
      timeOut: 3000, // Customize the time for each notification
      preventDuplicates: true,
    }), // ToastrModule added
    StoreModule.forRoot({ media: mediaReducer }), // Register the media reducer
    EffectsModule.forRoot([MediaEffects]), // Register the media effects
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
