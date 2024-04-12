import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio03',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio03.component.html',
  styleUrl: './ejercicio03.component.css'
})
export class Ejercicio03Component {
  season:Temporada = Temporada.Invierno;

  constructor() {
    console.log(this.whichMonths(this.season)); // Llama a la función whichMonths y muestra el resultado en la consola
  }

 whichMonths(season: Temporada): string {
    let monthsInSeason: string;
    switch (season) {
    case Temporada.Otoño:
      monthsInSeason = "September to November";
      break;
    case Temporada.Invierno:
      monthsInSeason = "December to February";
      break;
    case Temporada.Primavera:
      monthsInSeason = "March to May";
      break;
    case Temporada.Verano:
      monthsInSeason = "June to August";
    }
  return monthsInSeason;
 }
}

export enum Temporada{
  Otoño,
  Primavera,
  Invierno,
  Verano
}
