import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceList } from './components/service-list/service-list';
import { Service } from './interfaces/presupuesto.interface';
import { FormNewUser } from './components/form-new-user/form-new-user';
@Component({
  selector: 'app-root',
  imports: [ServiceList, FormNewUser],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class AppComponent {
  title = 'presupuestador-servicios-digitales';
  listService = signal< Service[] >([
    {
      id: 'Seo',
      name: 'Seo',
      description: "Programació d' una web responsive completa",
      basePrice: 300,
      selected: false,
    },
    {
      id: 'Ads',
      name: 'Ads',
      description: "Programació d'una web responsive completa",
      basePrice: 400,
      selected: false,
    },
    {
      id: 'Web',
      name: 'Web',
      description: "Programació d'una web responsive completa",
      basePrice: 500,
      selected: false,
      pages: 1,
      languages: 1,
    },
  ]);

  clientsData = signal<{ text: string; tel: string; email: string }[]>([]);

  searchFilter = signal('');

  // filtra los clientes de la lista según lo que escribas
  filteredServices = computed(() => {
    return this.listService()
      .filter((patata) =>
        patata.name.toLowerCase()
          .includes(this.searchFilter().toLowerCase())
      );
  })

  //Recibe los datos del formulario y los añade a la lista
  saveUserData(userSaveData: { text: string, tel: string, email: string }) {

    //actualizo lista y agrego los usuarios nuevos:
    this.clientsData.update((newClient) => [...newClient, userSaveData]);
    console.log("Client data ready to save!", userSaveData)
  }

  //Captura lo que escribes y actualiza la señal con set
  badgetListFilter(event: any) {
    const textUser = event.target.value;
    this.searchFilter.set(textUser)
  }

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

  totalPrice = computed(() => {
    let total: number = 0;

    for (let item of this.listService()) {

      if (item.selected === true) {

        if (item.name === 'Web') {

          const extraServiceLanguages = item.languages!;
          const extraServicePages = item.pages!;


          total += item.basePrice + (extraServiceLanguages + extraServicePages) * 30;
        } else {

          total += item.basePrice;
        }

      }
    }

    return total;
  });

}
