import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url='http://localhost.8080/persona/autenticacion/login';
  currentUserSubject:BehaviorSubject<any>;
  
  
  constructor(private http:HttpClient){
    this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
   }
   login(credenciales:any):Observable<any>{ 
    //console.log(credenciales);
    var httpOptions = {                
      headers: new HttpHeaders({
      'Content-Type' : 'application/json'
      }),
  }
    return this.http.post<any>(this.url, credenciales, httpOptions).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      console.log("aut service esta corriendo "+ JSON.stringify(data));
      return data;
    }));
  }
  
    get usuarioAutenticado() {
      return this.currentUserSubject.value;
    }
  
}
