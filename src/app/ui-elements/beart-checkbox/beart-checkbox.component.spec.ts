import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeartCheckboxComponent } from './beart-checkbox.component';

describe('BeartCheckboxComponent', () => {
  let component: BeartCheckboxComponent;
  let fixture: ComponentFixture<BeartCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeartCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeartCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
