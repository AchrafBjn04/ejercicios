import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio01Component } from './ejercicios/ejercicio01/ejercicio01.component';
import { Ejercicio02Component } from './ejercicios/ejercicio02/ejercicio02.component';
import { Ejercicio03Component } from './ejercicios/ejercicio03/ejercicio03.component';
import { Ejercicio04Component } from './ejercicios/ejercicio04/ejercicio04.component';
import { CalculadoraAritmeticaComponent } from './ejercicios/calculadora-aritmetica/calculadora-aritmetica.component';
import { CalculadoraDivisasComponent } from './ejercicios/calculadora-divisas/calculadora-divisas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculadoraDivisasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicios';
}
