import { Component, output } from '@angular/core';

@Component({
  selector: 'app-form-new-user',
  imports: [],
  templateUrl: './form-new-user.html',
  styleUrl: './form-new-user.css',
})

export class FormNewUser {
  // (estricta) EL PUENTE creado para enviar datos hacia componente principal
  userRegister = output<{ text: string, tel: string, email: string }>();
  errorMsj: string = "";
  //captura el envio del formulario y Frena evento  navegador con prevent (sumbit de html llama a sendForm)
  sendForm(event: Event, text: string, tel: string, email: string) {
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

    console.log("Datos enviados:", text, tel, email);
  }
}
