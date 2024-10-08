import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleTesterComponent } from './lifecycle-tester.component';

describe('LifecycleTesterComponent', () => {
  let component: LifecycleTesterComponent;
  let fixture: ComponentFixture<LifecycleTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleTesterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
