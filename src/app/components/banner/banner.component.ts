import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  persona: Persona[]=[];
  modoEdit: any;


  constructor(private personaService:PersonaService, private autService:AutenticacionService) { }

  ngOnInit(): void {
    this.personaService.list().subscribe(data => {this.persona = data;});
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    } else if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
  } else {
    this.modoEdit = true;
  }
}

}
