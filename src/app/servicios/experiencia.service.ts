import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url= 'http://localhost:8080/experiencia/'

  constructor(private httpClient:HttpClient) { }

    //metodos del netbeans ver todos
public List(): Observable<Experiencia[]>{
  return this.httpClient.get<Experiencia[]>(this.url + 'lista');
}

public detail(id: number): Observable<Experiencia>{
  return this.httpClient.get<Experiencia>(this.url + `detail/${id}`);
}

  //guardar
  public save(expe: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', expe);
  }

  public update(id: number, expe: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, expe);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `dalete/${id}`);
  }

}
