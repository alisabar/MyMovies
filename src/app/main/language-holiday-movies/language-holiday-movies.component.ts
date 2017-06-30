import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { URLSearchParams } from "@angular/http";
import {ActivatedRoute, Params} from '@angular/router';

import {MovieResult} from '../movie/movieResult.model';  

@Component({
  selector: 'app-language-holiday-movies',
  templateUrl: './language-holiday-movies.component.html',
  styleUrls: ['./language-holiday-movies.component.css']
})
export class LanguageHolidayMoviesComponent implements OnInit {
   
    holidays:string[]=['Passoveer','Christmas', 'Shavuot', 'Yom Kippur' ];
    selectedHoliday:string="";
    languages:string[]=['English','Hebrew'];
    selectedLanguage:string="";
    http:Http; 
    movies:MovieResult;
    
    getData(){

if(this.selectedLanguage===""){

 let data = new URLSearchParams();
  data.append('holiday_name', this.selectedHoliday);
  

        var url:string="https://ex1-vodlibrary-with-mlab.herokuapp.com/getMoviesByHoliday/";
        this.http
        .post(url,data)
        .map(res=>new MovieResult(res))
        .subscribe(moviesResult=>this.movies=moviesResult); 

}
else {
        var url:string="https://ex1-vodlibrary-with-mlab.herokuapp.com/getMoviesByHolidayAndLanguage/"+this.selectedHoliday+"/"+this.selectedLanguage;
        this.http
        .get(url)
        .map(res=>new MovieResult(res))
        .subscribe(moviesResult=>this.movies=moviesResult); 
}
  
    }
  
  constructor(http:Http) { 
    this.http=http;
  }

  ngOnInit() {
  }

}
