import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeartStarRatingComponent } from './beart-star-rating.component';

describe('BeartStarRatingComponent', () => {
  let component: BeartStarRatingComponent;
  let fixture: ComponentFixture<BeartStarRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeartStarRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeartStarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
