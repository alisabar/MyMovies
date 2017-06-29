import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import {Movie} from '../movie/movie.model';  
import {MovieComponent} from '../movie/movie.component';  

@Component({
  selector: 'app-all-holiday-movies',
  templateUrl: './all-holiday-movies.component.html',
  styleUrls: ['./all-holiday-movies.component.css']
})
export class AllHolidayMoviesComponent implements OnInit {
  http:Http; 
  movies:Movie[];
  constructor(http:Http) 
  {
        this.http=http;
   }

  ngOnInit() {
      this.getData();
  }
getData(){
        var url:string="https://ex1-vodlibrary-with-mlab.herokuapp.com/getHolidayMovies";
        this.http
        .get(url)
        .map(res=>res.json())
        .subscribe(moviesResult=>this.movies=moviesResult);  

    }
}
