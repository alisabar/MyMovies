import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import{AllHolidayMoviesComponent} from './main/all-holiday-movies/all-holiday-movies.component';
import{AllMoviesComponent} from './main/all-movies/all-movies.component';
import{LanguageHolidayMoviesComponent} from './main/language-holiday-movies/language-holiday-movies.component';

const appRoutes: Routes=[
{path: '', redirectTo: '/all-movies', pathMatch:'full'},
{path:'all-holiday-movies', component: AllHolidayMoviesComponent },
{path:'all-movies', component: AllMoviesComponent },
{path:'language-holiday-movies', component: LanguageHolidayMoviesComponent },
];
console.log('app routes loading...');
@NgModule({
    imports: [RouterModule.forRoot(appRoutes,{enableTracing:true})],
    exports: [RouterModule]
    
})
export class AppRoutingModule{

}

