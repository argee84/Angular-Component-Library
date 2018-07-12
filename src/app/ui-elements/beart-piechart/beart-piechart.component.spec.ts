import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeartPiechartComponent } from './beart-piechart.component';

describe('BeartPiechartComponent', () => {
  let component: BeartPiechartComponent;
  let fixture: ComponentFixture<BeartPiechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeartPiechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeartPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
