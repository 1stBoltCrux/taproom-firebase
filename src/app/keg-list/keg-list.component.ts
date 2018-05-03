import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() pintClickSender = new EventEmitter();

  sellPint(kegToEdit: Keg) {
    this.pintClickSender.emit(kegToEdit);
  }
  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  priceColor(clickedKeg){
    if (clickedKeg.price >= 5){
      return "list-group-item red";
    } else if (clickedKeg.price >= 3) {
      return  "list-group-item lightRed";
    } else {
      return "list-group-item faintRed";
    }
  }

  abvStyles(clickedKeg){
    if (clickedKeg.abv >= 6){
      return "list-group-item drunk";
    } else if (clickedKeg.price >= 3) {
      return  "list-group-item classy";
    } else {
      return "list-group-item pussy";
    }
  }

}
