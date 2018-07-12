import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeartSearchFilterDropdownComponent } from './beart-search-filter-dropdown.component';

describe('BeartSearchFilterDropdownComponent', () => {
  let component: BeartSearchFilterDropdownComponent;
  let fixture: ComponentFixture<BeartSearchFilterDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeartSearchFilterDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeartSearchFilterDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
