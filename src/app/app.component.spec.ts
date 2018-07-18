import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FilterPipe } from './pipes/filter.pipe';

import { ModalService } from './services/modal.service';
import { DomService } from './services/dom.service';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ToastrModule.forRoot() ],
      declarations: [ AppComponent, FilterPipe ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ ModalService, DomService ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
