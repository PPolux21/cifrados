import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atbash } from './atbash';

describe('Atbash', () => {
  let component: Atbash;
  let fixture: ComponentFixture<Atbash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Atbash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atbash);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
