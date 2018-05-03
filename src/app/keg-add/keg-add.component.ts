import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'keg-add',
  templateUrl: './keg-add.component.html',
  styleUrls: ['./keg-add.component.css']
})
export class KegAddComponent{
  @Input() addKegisClicked = "addKeg";
  @Output() sendKeg = new EventEmitter();
  @Output() addKeg = new EventEmitter();
  @Output() finishKeg = new EventEmitter();

    showAddKeg(){
      this.addKeg.emit();
    }

    finishAddingKeg(){
      this.finishKeg.emit();
    }



submitKeg(name: string, brand: string, price: number, abv: number, pintCount: number, image: string) {
  let newKeg: Keg = new Keg(name, brand, price, abv, pintCount, image);
  this.sendKeg.emit(newKeg);
}
}
