import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripleProjectionComponent } from './triple-projection.component';

describe('TripleProjectionComponent', () => {
  let component: TripleProjectionComponent;
  let fixture: ComponentFixture<TripleProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripleProjectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripleProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
