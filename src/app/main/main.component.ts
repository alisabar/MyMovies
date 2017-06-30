import { Component, OnInit,Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
@Input() mainSelectedFeature: string;
  constructor() { }

  ngOnInit() {
  }

}
