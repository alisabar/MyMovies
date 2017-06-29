import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadFeature='all';

  onNav(feature:string){
      this.loadFeature=feature;
  }
}
