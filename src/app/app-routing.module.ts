import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaLibriComponent } from './lista-libri/lista-libri.component';
import { AggiungiLibroComponent } from './aggiungi-libro/aggiungi-libro.component';
import { ModificaLibroComponent } from './modifica-libro/modifica-libro.component';
import { DettaglioLibroComponent } from './dettaglio-libro/dettaglio-libro.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { HomeComponent } from './home/home.component';
import{ListaClientiComponent} from './lista-clienti/lista-clienti.component';
import { DettaglioClienteComponent } from './dettaglio-cliente/dettaglio-cliente.component';


const routes: Routes = [
  { path:'', component:HomeComponent, canActivate: [AuthGaurdService] },
  { path:'libri', component:ListaLibriComponent, canActivate: [AuthGaurdService] },
  { path:'AggiungiLibro', component:AggiungiLibroComponent, canActivate: [AuthGaurdService] },
  /* aggiungiLibro è inserito come bottone con link routelink in listalibricomponent.html*/
  { path:'Modifica', component:ModificaLibroComponent},
  /* in lista libri.component.ts nella funzione goToBookEditor (libro: Libro) {
  this.router.navigate(['/Modifica']);
  Nel router inserisco il nome Modifica o altro basta che sia uguale al path qui
}*/
{ path:'DettaglioLibro', component: DettaglioLibroComponent, canActivate: [AuthGaurdService] } ,
{ path: 'DettaglioCliente', component:DettaglioClienteComponent, canActivate: [AuthGaurdService] },
{ path: 'login', component: LoginComponent },
{ path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService] },
{ path: 'clienti', component:ListaClientiComponent, canActivate:[AuthGaurdService]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
