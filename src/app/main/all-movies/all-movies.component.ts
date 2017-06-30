import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {ActivatedRoute, Params} from '@angular/router';
import {Movie} from '../movie/movie.model';  
import {MovieResult} from '../movie/movieResult.model';  
import {MovieComponent} from '../movie/movie.component';  

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
   //movies:Movie[];
   http:Http; 
   moviesResult:MovieResult;
 
  constructor(http:Http) 
  {
        this.http=http;
   }

  ngOnInit() {
      this.getData();
  }
getData(){
        var url:string="https://ex1-vodlibrary-with-mlab.herokuapp.com/getAllMovies";
        this.http
        .get(url)
        .map(res=>new MovieResult(res))
        .subscribe(moviesResult=>this.moviesResult=moviesResult);  
    }

}
