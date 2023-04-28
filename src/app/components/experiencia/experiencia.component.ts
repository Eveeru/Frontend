import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { DatosService } from 'src/app/servicios/datos.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[]=[] //se llama a la entidad Experiencia

  constructor(private sExperiencia: ExperienciaService) { }



  ngOnInit(): void {
         //se hace cuando se inicia la página
    this.cargarExperiencia();
  }

  //llamamos a los métodos
  public cargarExperiencia():void{   //no va a haber ningun retorno, solo una carga de datos
    this.sExperiencia.List().subscribe(data => {this.experiencias=data}); // uso el this porque esta fuera del método
  }
  
  public borrar(id:number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data =>{
          // alert("Experiencia eliminada correctamente)
          this.cargarExperiencia();
        }, err =>{
          alert("No se pudo elmiminar la experiencia")
        }
      )
    }
  }

}
