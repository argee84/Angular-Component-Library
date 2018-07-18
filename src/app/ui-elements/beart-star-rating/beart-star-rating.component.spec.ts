import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { StarRatingModule } from 'angular-star-rating';

import { BeartStarRatingComponent } from './beart-star-rating.component';

describe('BeartStarRatingComponent', () => {
  let component: BeartStarRatingComponent;
  let fixture: ComponentFixture<BeartStarRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ StarRatingModule.forRoot() ],
      declarations: [ BeartStarRatingComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
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
