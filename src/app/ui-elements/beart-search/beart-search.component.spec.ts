import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeartSearchComponent } from './beart-search.component';

describe('BeartSearchComponent', () => {
  let component: BeartSearchComponent;
  let fixture: ComponentFixture<BeartSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeartSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeartSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
