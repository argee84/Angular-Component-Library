import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ModalService } from '../../services/modal.service';
import { DomService } from '../../services/dom.service';


import { BeartModalComponent } from './beart-modal.component';

describe('BeartModalComponent', () => {
  let component: BeartModalComponent;
  let fixture: ComponentFixture<BeartModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeartModalComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ ModalService, DomService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
