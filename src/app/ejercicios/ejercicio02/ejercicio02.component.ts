import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio02',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio02.component.html',
  styleUrl: './ejercicio02.component.css'
})
export class Ejercicio02Component {
  x: number;
  y: number;
  a: number;
  
  constructor() {
    this.x = 5;
    this.y = 7;
    this.a = this.x + this.y;
    console.log(this.a);
  }
}
