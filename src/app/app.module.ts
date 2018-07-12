import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeartCheckboxComponent } from './ui-elements/beart-checkbox/beart-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    BeartCheckboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
