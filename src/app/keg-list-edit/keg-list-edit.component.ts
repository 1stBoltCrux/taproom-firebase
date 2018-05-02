import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'keg-list-edit',
  templateUrl: './keg-list-edit.component.html',
  styleUrls: ['./keg-list-edit.component.css']
})
export class KegListEditComponent {
@Input() childSelectedKeg: Keg;
@Output() clickedDone = new EventEmitter();

finishedEditing() {
  this.clickedDone.emit();
}

}
