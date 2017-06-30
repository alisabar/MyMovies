import {Response } from '@angular/http';

import {Movie} from './movie.model';

export class MovieResult{

constructor(response:Response){

let responseData = response.json();
    if (responseData.Error){
        this.error=responseData.Error;    
    }
    else {
        this.movies=responseData;    
    }
console.log('MovieResult created from input',response,this);
}

 public movies: Movie [];
 public error: string;

}

