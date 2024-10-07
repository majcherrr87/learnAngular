import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreazyBoxComponent } from './creazy-box.component';

describe('CreazyBoxComponent', () => {
  let component: CreazyBoxComponent;
  let fixture: ComponentFixture<CreazyBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreazyBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreazyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
