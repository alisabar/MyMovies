import { Component, OnInit ,Input} from '@angular/core';
import {MovieResult} from './movieResult.model';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {

@Input() moviesData: MovieResult;

  constructor() { 

  }

  ngOnInit() {
  }

}
