import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url = 'http://localhost:8080/persona/';

  constructor(private http:HttpClient) { }

// lista
public list(): Observable<Persona[]>{
  return this.http.get<Persona[]>(this.url + 'traer');
} 

//agregar persona
public agregarPersona(persona: Persona): Observable<any>{
  return this.http.post<any>(this.url + 'crear', persona);
}
//borrar persona por id
public eliminarPersona(id: number): Observable<any>{
  return this.http.delete<any>(this.url + `borrar/${id}`);
}
//editar persona
public updatePersona(persona: Persona): Observable<any>{
  return this.http.put<any>(this.url + 'editar', persona);

  }
}
