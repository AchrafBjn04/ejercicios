import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraAritmeticaComponent } from './calculadora-aritmetica.component';

describe('CalculadoraAritmeticaComponent', () => {
  let component: CalculadoraAritmeticaComponent;
  let fixture: ComponentFixture<CalculadoraAritmeticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraAritmeticaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculadoraAritmeticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
