import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-divisas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora-divisas.component.html',
  styleUrl: './calculadora-divisas.component.css'
})
export class CalculadoraDivisasComponent {
  euro:number = 0;
  dollar:number = 0;
  libra:number = 0;

  euroCalc(){
    this.dollar = this.euro*1.07;
    this.libra = this.euro*0.85;
  }

  dollarCalc(){
    this.euro = this.dollar*0.94;
    this.libra = this.dollar*0.80;
  }

  libraCalc(){
    this.euro = this.libra*1.17;
    this.dollar = this.libra*1.25; 
  }

  onKeyPress(event: KeyboardEvent) {
    const allowedChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    if (event.key && allowedChars.indexOf(event.key) === -1) {
      event.preventDefault();
    }
  }


}
