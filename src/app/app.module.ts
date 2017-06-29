import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { AllMoviesComponent } from './main/all-movies/all-movies.component';
import { AllHolidayMoviesComponent } from './main/all-holiday-movies/all-holiday-movies.component';
import { LanguageHolidayMoviesComponent } from './main/language-holiday-movies/language-holiday-movies.component';
import { MovieComponent } from './main/movie/movie.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    AllMoviesComponent,
    AllHolidayMoviesComponent,
    LanguageHolidayMoviesComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
