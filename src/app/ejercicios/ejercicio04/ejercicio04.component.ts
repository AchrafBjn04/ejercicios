import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio04',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio04.component.html',
  styleUrl: './ejercicio04.component.css'
})
export class Ejercicio04Component {
  randomNumbers:Array<number> = [];
  
  constructor(){
    this.generarNumRandoms();
  }
  generarNumRandoms(){
    for (let i = 0; i < 10; i++) {
      let nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
      this.randomNumbers.push(nextNumber);
      }
      console.log(this.randomNumbers);
  }
}
