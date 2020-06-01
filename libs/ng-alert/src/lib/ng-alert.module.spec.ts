import { async, TestBed } from '@angular/core/testing';
import { NgAlertModule } from './ng-alert.module';

describe('NgAlertModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgAlertModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgAlertModule).toBeDefined();
  });
});
