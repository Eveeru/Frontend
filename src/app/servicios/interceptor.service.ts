import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private autenticacionServicio: AutenticacionService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser = this.autenticacionServicio.usuarioAutenticado;
    if(currentUser && currentUser.id){
      request.clone({
        setHeaders:{
          Authorization: `Bearer${currentUser.id}`  //retorna datos de la persona
        }
      })
    }
   // console.log("Interceptor corriendo " + JSON.stringify(currentUser));
    return next.handle(request);
  }

}
