import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomarrayComponent } from './domarray.component';

describe('DomarrayComponent', () => {
  let component: DomarrayComponent;
  let fixture: ComponentFixture<DomarrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomarrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
