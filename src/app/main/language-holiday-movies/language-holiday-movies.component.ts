import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { URLSearchParams } from "@angular/http"


import {Movie} from '../movie/movie.model';  
import {MovieComponent} from '../movie/movie.component';  

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

    movies:Movie[];
    
    getData(){
        
if(this.selectedLanguage===""){

 let data = new URLSearchParams();
  data.append('holiday_name', this.selectedHoliday);
  

        var url:string="https://ex1-vodlibrary-with-mlab.herokuapp.com/getMoviesByHoliday/";
        this.http
        .post(url,data)
        .map(res=>res.json())
        .subscribe(moviesResult=>this.movies=moviesResult); 

}
else {
        var url:string="https://ex1-vodlibrary-with-mlab.herokuapp.com/getMoviesByHolidayAndLanguage/"+this.selectedHoliday+"/"+this.selectedLanguage;
        this.http
        .get(url)
        .map(res=>res.json())
        .subscribe(moviesResult=>this.movies=moviesResult); 

}
  
    }
  
  constructor(http:Http) { 
    this.http=http;
  }

  ngOnInit() {
/*
let mockData=
{"movies":[
  {
  "name": "Exodus- Gods and Kings",
  "year": "2014",
  "genre": ["History", "Adventure"],
  "starring": ["Christian Bale", "Joel Edgerton", "John Turturro"],
  "running time": "150 min",
  "country": "United States",
  "language": {
    "original": "English",
    "subtitles": ["English", "Hebrew", "Spanish", "Russian"]
  },
  "holiday": "Passover",
  "tags": ["Holiday", "Passover", "Moses", "Bible"]
}

  ]
};

  this.movies=mockData.movies;
*/
  }

}
