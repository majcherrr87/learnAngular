import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollarExchangeComponent } from './dollar-exchange.component';

describe('DollarExchangeComponent', () => {
  let component: DollarExchangeComponent;
  let fixture: ComponentFixture<DollarExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DollarExchangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DollarExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
