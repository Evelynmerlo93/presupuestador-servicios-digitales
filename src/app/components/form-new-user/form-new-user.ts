import { Component, output } from '@angular/core';

@Component({
  selector: 'app-form-new-user',
  imports: [],
  templateUrl: './form-new-user.html',
  styleUrl: './form-new-user.css',
})
export class FormNewUser {
  //declaro aqui output estricta con solicitud de form modo string para seguridad
  userRegister = output <{text:string, tel:string, email:string}> (); 
  // La función que se ejecuta cuando el usuario le da a enviar
  sendForm(event: Event, text: string, tel: string, email: string ){
    event.preventDefault();// <-- Frena el evento nativo del navegador
    this.userRegister.emit({text:text, tel:tel, email:email});
    //console.log("Datos enviados:", text, tel, email);
  }
}
