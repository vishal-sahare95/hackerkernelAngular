import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolatinComponent } from './interpolatin.component';

describe('InterpolatinComponent', () => {
  let component: InterpolatinComponent;
  let fixture: ComponentFixture<InterpolatinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolatinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolatinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
