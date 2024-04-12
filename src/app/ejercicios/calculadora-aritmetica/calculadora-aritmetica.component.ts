import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-calculadora-aritmetica',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora-aritmetica.component.html',
  styleUrl: './calculadora-aritmetica.component.css'
})
export class CalculadoraAritmeticaComponent {
  operador:string =  "";
  num1:number = 0;
  num2:number = 0;
  mostrarResultado: boolean = false;

  noMostrar(){
    this.mostrarResultado = false;
  }

  suma(){
    this.operador = "+";
    this.noMostrar()
  }
  resta(){
    this.operador = "-";
    this.noMostrar()
  }
  multiplicacion(){
    this.operador = "x";
    this.noMostrar()
  }
  division(){
    this.operador = "/";
    this.noMostrar()
  }
  resultado():number{
    let resultado:number = 0;
    this.mostrarResultado = true;
    switch(this.operador){
      case "+":
        resultado = this.num1 + this.num2;
        break;
      case "-":
        resultado = this.num1 - this.num2;
        break;
      case "x":
        resultado = this.num1 * this.num2;
        break;
      case "/":
        if (this.num2 !== 0) {
          resultado = this.num1 / this.num2;
        } else {
          resultado = NaN;
        }
        break;
    }
    return resultado;
  }
}
