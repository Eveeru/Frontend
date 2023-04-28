import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  persona: Persona[]=[];
  modoEdit: any;

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.list().subscribe(data =>{
      this.persona = data
    });
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else {
      this.modoEdit = true;
    }
  }
  cerrarSesion(){
    sessionStorage.setItem('currentUser', "null");
    this.modoEdit = false;
    alert("sesion cerrada");
    window.location.reload();
    return this.modoEdit;
  }
  
}
