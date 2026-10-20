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

  listService = signal <Service[]> ([
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
          return clickedService;

        } else {
          
          return item;
        }
      }),
    );

    console.log('Servicio seleccionado o modificado: ', clickedService);
  }
// Calculadora para sumar automáticamente los precios de los servicios que tienen selected: true
  totalPrice = computed(() => {
    let total = 0;  

    for (let item of this.listService()) {
      // Primero comprobar que el servicio este marcado
      if (item.selected) {
        
        // Si esta marcado, miramos si es la web o es otro servicio
        if (item.id === 'web') {

          // Fórmula especial para la web: 500 + ((páginas + idiomas) * 30)
          const pages = item.pages || 0;
          const languages = item.languages || 0;
          
          total += item.basePrice + ((pages + languages) * 30);
       
        } else {
          // Para SEO o Ads, sumamos su precio base normal
          total += item.basePrice;
        }

      } // Si no está seleccionado (selected: false), el bucle lo ignora y no suma nada.
    }
    
    return total;
  });
}
