import { BrowserModule }                      from '@angular/platform-browser';
import { BrowserAnimationsModule }            from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }   from '@angular/core';
import { FormsModule }                        from '@angular/forms';
import { HttpClientModule }                   from '@angular/common/http'; 
import { HttpModule }                         from '@angular/http';
import { ServiceWorkerModule }                from '@angular/service-worker';
import { environment }                        from '../environments/environment';

import { AppComponent }                       from './app.component';

/****** SERVICES **********************************************************/
import { ModalService }                       from './services/modal.service';
import { DomService }                         from './services/dom.service';

/****** OWN-COMPONENTs *****************************************************/
import { BeartCheckboxComponent } from './ui-elements/beart-checkbox/beart-checkbox.component';
import { BeartModalComponent } from './ui-elements/beart-modal/beart-modal.component';
import { BeartPiechartComponent } from './ui-elements/beart-piechart/beart-piechart.component';
import { BeartProgressbarComponent } from './ui-elements/beart-progressbar/beart-progressbar.component';
import { BeartRadiobuttonComponent } from './ui-elements/beart-radiobutton/beart-radiobutton.component';

@NgModule({
  declarations: [
    AppComponent,
    BeartCheckboxComponent,
    BeartModalComponent,
    BeartPiechartComponent,
    BeartProgressbarComponent,
    BeartRadiobuttonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
  ],
  providers: [
    ModalService,
    DomService
  ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
