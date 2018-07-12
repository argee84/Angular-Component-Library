import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeartProgressbarComponent } from './beart-progressbar.component';

describe('BeartProgressbarComponent', () => {
  let component: BeartProgressbarComponent;
  let fixture: ComponentFixture<BeartProgressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeartProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeartProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
