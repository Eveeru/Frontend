import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './modal/login/login.component';
import { GuardService } from './servicios/guard.service';

const routes: Routes = [
  {path: '', component: InicioComponent, canActivate:[GuardService]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:'/inicio', pathMatch: 'full'},
  {path: '**', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
