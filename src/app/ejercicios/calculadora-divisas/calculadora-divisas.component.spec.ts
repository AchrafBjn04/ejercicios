import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraDivisasComponent } from './calculadora-divisas.component';

describe('CalculadoraDivisasComponent', () => {
  let component: CalculadoraDivisasComponent;
  let fixture: ComponentFixture<CalculadoraDivisasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraDivisasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculadoraDivisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
