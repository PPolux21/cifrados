import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caesar } from './caesar';

describe('Caesar', () => {
  let component: Caesar;
  let fixture: ComponentFixture<Caesar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Caesar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Caesar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
