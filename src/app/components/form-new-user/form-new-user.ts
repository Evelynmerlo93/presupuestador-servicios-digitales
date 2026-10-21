import { Component, output } from '@angular/core';

@Component({
  selector: 'app-form-new-user',
  imports: [],
  templateUrl: './form-new-user.html',
  styleUrl: './form-new-user.css',
})
export class FormNewUser {
  //declaro aqui output con solicitud de form modo string para seguridad
  userRegister = output <{text:string, tel:string, email:string}> (); 
    
  
}
