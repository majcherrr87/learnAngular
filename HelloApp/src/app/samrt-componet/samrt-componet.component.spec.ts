import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamrtComponetComponent } from './samrt-componet.component';

describe('SamrtComponetComponent', () => {
  let component: SamrtComponetComponent;
  let fixture: ComponentFixture<SamrtComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamrtComponetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamrtComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
