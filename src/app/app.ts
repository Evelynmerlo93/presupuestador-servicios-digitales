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

  listService = signal <Service []> ([

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

//2da signal, cesta con los servicios de clientes
clientsData = signal <{ text: string; tel: string; email: string } [] >([]);

searchFilter = signal ('');

filteredServices = computed(() => {
  return this.listService()
        .filter((patata) => 
        patata.name.toLowerCase()
        .includes(this.searchFilter().toLowerCase())
  );
})


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
// Calculadora suma autom. precios de los serv que tienen selected: true
  totalPrice = computed(() => {
    let total = 0;  

    for (let item of this.listService()) {
      //  comprobar que el servicio este selecciondo
      if (item.selected) {
        
        if (item.id === 'web' &&  item.basePrice === 500 ) {
          const pages = item.pages || 1;
          const languages = item.languages || 1;

          let morePages = 0
          let moreLenguages = 0

            if(morePages > 1){
            morePages = morePages * 30
          } else {
            morePages = 0
          }

            if(moreLenguages > 1){
            moreLenguages = moreLenguages * 30
            } else {
            moreLenguages = 0
          }
            
          total += item.basePrice + ((morePages + moreLenguages) * 30);

        } else {
          total += item.basePrice;
        }

      }
    }

    return total;
  });

//toma la informacion del formulario
  saveUserData(userSaveData: { text: string, tel:string, email:string}){

    //actualizo lista y agrego los usuarios nuevos
   this.clientsData.update((patata) => [...patata, userSaveData  ] );
    console.log("Client data ready to save!", userSaveData )
  }
  //para sacar el texto que escribio el usuario en buscador y acttualizo lo que escriba con set
badgetListFilter(event:any){
  const textUser= event.target.value;
}
}
