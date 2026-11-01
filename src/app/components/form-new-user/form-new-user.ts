import { Component, output } from '@angular/core';

@Component({
  selector: 'app-form-new-user',
  imports: [],
  templateUrl: './form-new-user.html',
  styleUrl: './form-new-user.css',
})


export class FormNewUser {
//Megafono 
userRegister = output<{ text: string, tel: string, email: string, }>();

errorMsj: string = "";

  //captura envio del formulario y frena evento navegador 
  sendForm(event: Event, text: string, tel: string, email: string , formElement: HTMLFormElement) {
    event.preventDefault();

    if (text === "" || tel === "" || email === "") {
   this.errorMsj = "Por favor, completa todos los campos para continuar.";
      return;
    }

    this.userRegister.emit({
      text: text,
      tel: tel,
      email: email
    });

    formElement.reset();

    console.log("Datos enviados:", text, tel, email);
  }
}
