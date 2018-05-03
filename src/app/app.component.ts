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
    new Keg('Czech Pils', 'Buoy', 2, 6.2, 124, "../assets/buoy.jpg"),
    new Keg('Pils', 'Heater Allen', 5, 5.2, 124, "../assets/heaterallen.png"),
    new Keg('Gimme Mo', 'Crux', 4, 6.2, 124, "../assets/crux.jpg"),
    new Keg('Oatmeal Pale Ale', 'Burnside Brewing', 8, 5.6, 124, "../assets/burnsidebrewing.jpg")
  ];
  childSelectedKeg = null;
  addKegisClicked = null;


  showAddKeg(){
    this.addKegisClicked = "showKeg";
  }


  editKeg(clickedKeg){
    this.childSelectedKeg = clickedKeg;
  }

  finishedEditing() {
  this.childSelectedKeg = null;
}
  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
  }

  finishAddingKeg(){
    this.addKegisClicked = null;
  }

  sellPint(clickedPint){
    if (clickedPint.pintCount <= 0) {
      return clickedPint.pintCount;
    } else {
      clickedPint.pintCount --
      return clickedPint.pintCount;
    }
  }

}
