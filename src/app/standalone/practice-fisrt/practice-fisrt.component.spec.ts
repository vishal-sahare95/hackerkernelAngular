import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeFisrtComponent } from './practice-fisrt.component';

describe('PracticeFisrtComponent', () => {
  let component: PracticeFisrtComponent;
  let fixture: ComponentFixture<PracticeFisrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PracticeFisrtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeFisrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
