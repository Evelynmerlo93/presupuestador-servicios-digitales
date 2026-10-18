import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../interfaces/presupuesto.interface';

@Component({
  selector: 'app-service-list',
  imports: [CommonModule],
  templateUrl: './service-list.html',
  styleUrl: './service-list.css',
})

//RECIBE lo que manda PADRE
export class ServiceList {
    service = input<Service[]>([]);
  totalPrice = input<number>(0);

//luego avisa al PADRE para que actualice informacion
serviceSelect = output <Service> ();

  onServiceChange(service: Service) {
    this.serviceSelect.emit(service);
  }
  // Funcion para cuando cambian las páginas
  onPagesChange(service: Service, event: Event) {

    const inputElement = event.target as HTMLInputElement;
    const updatedService = { ...service, pages: Number(inputElement.value) };

    this.serviceSelect.emit(updatedService);
  }
  // Funcion para cuando cambian los idiomas
  onLanguagesChange(service: Service, event: Event) {

    const inputElement = event.target as HTMLInputElement;
    const updatedService = { ...service, languages: Number(inputElement.value) };
    
    this.serviceSelect.emit(updatedService);
  }
}
