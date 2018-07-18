import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BeartRadiobuttonComponent } from './beart-radiobutton.component';

describe('BeartRadiobuttonComponent', () => {
  let component: BeartRadiobuttonComponent;
  let fixture: ComponentFixture<BeartRadiobuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeartRadiobuttonComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeartRadiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
