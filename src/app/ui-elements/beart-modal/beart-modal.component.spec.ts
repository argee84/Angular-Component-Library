import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeartModalComponent } from './beart-modal.component';

describe('BeartModalComponent', () => {
  let component: BeartModalComponent;
  let fixture: ComponentFixture<BeartModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeartModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
