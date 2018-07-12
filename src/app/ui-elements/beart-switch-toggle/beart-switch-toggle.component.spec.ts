import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeartSwitchToggleComponent } from './beart-switch-toggle.component';

describe('BeartSwitchToggleComponent', () => {
  let component: BeartSwitchToggleComponent;
  let fixture: ComponentFixture<BeartSwitchToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeartSwitchToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeartSwitchToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
