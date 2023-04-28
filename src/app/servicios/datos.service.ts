import { Injectable } from '@angular/core';
//Esto es para suscribirse y recibir respuesta de forma asíncrona
import { Observable } from 'rxjs';
//Esto es para poder hacer peticiones
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http:HttpClient) { }

    //Método observable que devuelve datos
    getDatos(): Observable <any> {
      //Se llama al JSON con su paht -ruta-, o bien, en su lugar se puede poner una URL para traer datos de un JSON online
      return this.http.get('./assets/json/datos.json');
    }
}
