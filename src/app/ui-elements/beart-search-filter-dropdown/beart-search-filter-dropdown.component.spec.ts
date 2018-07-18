import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FilterPipe } from '../../pipes/filter.pipe';

import { BeartSearchFilterDropdownComponent } from './beart-search-filter-dropdown.component';

describe('BeartSearchFilterDropdownComponent', () => {
  let component: BeartSearchFilterDropdownComponent;
  let fixture: ComponentFixture<BeartSearchFilterDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientModule ],
      declarations: [ BeartSearchFilterDropdownComponent, FilterPipe ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
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
