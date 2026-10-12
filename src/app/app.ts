import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ServiceListComponent } from './components/service-list/service-list'; 
import { Service } from './interfaces/presupuesto.interface';
@Component({
  selector: 'app-root',
  imports: [CommonModule, ServiceListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'presupuestador-servicios-digitales';

//primer paso creo array de tarj con signal 
listService =  signal < Service [] > ([

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

])};
