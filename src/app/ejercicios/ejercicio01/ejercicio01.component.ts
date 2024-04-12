import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio01',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio01.component.html',
  styleUrl: './ejercicio01.component.css'
})
export class Ejercicio01Component {
  firstName: string = 'Rebecca';
  lastName: string = 'Smith';
  fullName: string;
  age: number = 42;
  ukCitizen: boolean = false;

  constructor() {
    this.fullName = this.firstName + ' ' + this.lastName;
    if (this.ukCitizen) {
      console.log("My name is " + this.fullName + ", I'm " + this.age + ", and I'm a citizen of the United Kingdom.");
    } else {
      console.log("My name is " + this.fullName + ", I'm " + this.age + ", and I'm not a citizen of the United Kingdom.");
    }
  }
}
