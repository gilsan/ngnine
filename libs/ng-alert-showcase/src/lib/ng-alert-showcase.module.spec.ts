import { async, TestBed } from '@angular/core/testing';
import { NgAlertShowcaseModule } from './ng-alert-showcase.module';

describe('NgAlertShowcaseModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgAlertShowcaseModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgAlertShowcaseModule).toBeDefined();
  });
});
