import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../interfaces/presupuesto.interface';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-list.html',
  styleUrl: './service-list.css'
})
export class ServiceListComponent {
  @Input() services: Service[] = [];
}