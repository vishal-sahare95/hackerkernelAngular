import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaintPageComponent } from './containt-page.component';

describe('ContaintPageComponent', () => {
  let component: ContaintPageComponent;
  let fixture: ComponentFixture<ContaintPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaintPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContaintPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
