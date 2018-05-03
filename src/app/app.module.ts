import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { KegListEditComponent } from './keg-list-edit/keg-list-edit.component';
import { KegAddComponent } from './keg-add/keg-add.component';



@NgModule({
  declarations: [
    AppComponent,
    KegListComponent,
    KegListEditComponent,
    KegAddComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
