import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
//import { DatosService } from 'src/app/servicios/datos.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit { 
 //persona: Persona = new Persona("","","","","");
 persona: Persona[]=[];

  constructor(      
  public persoService: PersonaService) { }

  ngOnInit(): void {
    this.persoService.list().subscribe(data =>{this.persona=data});
  }

}
