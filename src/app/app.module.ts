import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list/keg-list.component';



@NgModule({
  declarations: [
    AppComponent,
    KegListComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
