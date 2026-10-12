import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('presupuestador-servicios-digitales');
}

const listService =  signal < Service [] > ([

  {
    id: "seo",
    name: 'seo',
    description: "Programació d' una web responsive completa",
    basePrice: 300,
    selected: false,
  },

  {
    id: "ads",
    name: 'ads',
    description: "Programació d'una web responsive completa",
    basePrice: 400,
    selected: false,
  },

  {
    id: "web",
    name: 'web',
    description: "Programació d'una web responsive completa",
    basePrice: 500,
    selected: false,
    pages: 1,
    languages: 1,
  },

]);