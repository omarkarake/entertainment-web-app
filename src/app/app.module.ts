import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    InputComponent,
    ButtonComponent,
    BookmarkComponent,
    NavigationComponent,
    HeaderComponent,
    MainComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
