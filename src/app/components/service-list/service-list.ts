import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../interfaces/presupuesto.interface';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-list.html',
  styleUrl: './service-list.css',
})

//RECIBE el array de servicios que manda PADRE
export class ServiceList {
  service = input<Service[]>([]);

  serviceSelect = output<Service>();

  onServiceChange(service: Service) {
    this.serviceSelect.emit(service);
  }
}
