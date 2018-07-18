import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BeartVideoComponent } from './beart-video.component';

describe('BeartVideoComponent', () => {
  let component: BeartVideoComponent;
  let fixture: ComponentFixture<BeartVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeartVideoComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeartVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
