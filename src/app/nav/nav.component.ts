import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
@Output() navFeatureSelected=new EventEmitter<string>();
selectedfeature:string; 

onSelect(feature:string){
    this.selectedfeature=feature;
    this.navFeatureSelected.emit(feature);
}

  constructor() { }

  ngOnInit() {
      this.selectedfeature='all';
  }

}
