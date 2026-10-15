import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ServiceList } from './components/service-list/service-list';
import { Service } from './interfaces/presupuesto.interface';
@Component({
  selector: 'app-root',
  imports: [CommonModule, ServiceList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  title = 'presupuestador-servicios-digitales';

  listService = signal<Service[]>([
    {
      id: 'seo',
      name: 'seo',
      description: "Programació d' una web responsive completa",
      basePrice: 300,
      selected: false,
    },

    {
      id: 'ads',
      name: 'ads',
      description: "Programació d'una web responsive completa",
      basePrice: 400,
      selected: false,
    },

    {
      id: 'web',
      name: 'web',
      description: "Programació d'una web responsive completa",
      basePrice: 500,
      selected: false,
      pages: 1,
      languages: 1,
    },
  ]);

  serviceSelect(clickedService: Service) {
    this.listService.update((services) =>
      services.map((item) => {
        if (item.id === clickedService.id) {
          return { ...item, selected: !item.selected };
        } else {
          return item;
        }
      }),
    );

    console.log('Servicio seleccionado:', clickedService);
  }

  totalPrice = computed(() => {
    let total = 0;    for (let item of this.listService()) {
      if (item.selected) {
        total = total + item.basePrice;
      }
    }
    return total;
  });
  //precio total calculado va aqui
}
