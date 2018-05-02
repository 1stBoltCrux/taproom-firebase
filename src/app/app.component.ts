import { Component } from '@angular/core';
import { Keg } from './models/keg.model';
import { KegListComponent } from './keg-list/keg-list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  masterKegList: Keg[] = [
    new Keg('Czech Pils', 'Buoy', 6, 6.2, 124, "../assets/buoy.jpg"),
    new Keg('Pils', 'Heater Allen', 5, 5.2, 124, "../assets/heaterallen.png"),
    new Keg('Gimme Mo', 'Crux', 4, 6.2, 124, "../assets/crux.jpg"),
    new Keg('Oatmeal Pale Ale', 'Burnside Brewing', 6, 5.6, 124, "../assets/burnsidebrewing.jpg")
  ];
  childSelectedKeg = null;


  editKeg(clickedKeg){
    this.childSelectedKeg = clickedKeg;
    console.log(this.childSelectedKeg);
  }

  finishedEditing() {
  this.childSelectedKeg = null;
}
}
