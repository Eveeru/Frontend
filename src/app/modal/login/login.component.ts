import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  persona: Persona = new Persona("", "", "", "", "");
  email='';
  clave='';
 

  constructor(private formBuilder:FormBuilder, private ruta: Router, private autService: AutenticacionService) { 
    this.form=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      calve:['',[Validators.required,Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
    sessionStorage.setItem('currentUser', "");
  }
  
  // Métodos para obtener los controles del formulario y validarlos
  get Email(){
    return this.form.get("email");
  }

  get EmailInvalido(){
    return this.Email?.errors && this.Email?.touched;
  }

  get EmailValido(){
    return !this.Email?.errors && this.Email?.touched;
  }

   get Clave(){
    return this.form.get("clave");
  }

  get ClaveInvalido(){
    return this.Clave?.errors && this.Clave?.touched;
  }

  get ClaveValido(){
    return !this.Clave?.errors && this.Clave?.touched;
  }
  
  limpiar() {
    console.log("Se limpió el formulario")
    this.form.reset();
    this.ruta.navigate(['']);
  }

  onEnviar(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      console.log(JSON.stringify(this.form.value));
      this.autService.login(this.form.value).subscribe(db => {
        console.log("DATA: " + JSON.stringify(db.id));
        if (db.id) {
          alert("Puedes editar el portfolio");
          this.ruta.navigate(['/dashboard']);
        } else {
          alert("Error al iniciar sesión, credenciales no válidas!!!");
        }
      }, err => {
        alert("ERROR!!!");
      })
    } else {
      sessionStorage.setItem('currentUser', "");
      alert("Error! No tienes acceso");
      this.ruta.navigate(['/']);
    }
  }

}

