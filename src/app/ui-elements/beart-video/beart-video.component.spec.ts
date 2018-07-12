import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeartVideoComponent } from './beart-video.component';

describe('BeartVideoComponent', () => {
  let component: BeartVideoComponent;
  let fixture: ComponentFixture<BeartVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeartVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeartVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
