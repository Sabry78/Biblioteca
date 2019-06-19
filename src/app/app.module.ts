import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaLibriComponent } from './lista-libri/lista-libri.component';
import { AggiungiLibroComponent } from './aggiungi-libro/aggiungi-libro.component';
import { FormsModule }   from '@angular/forms';
import { ModificaLibroComponent } from './modifica-libro/modifica-libro.component';
import { DettaglioLibroComponent } from './dettaglio-libro/dettaglio-libro.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BasicAuthHtppInterceptorServiceService } from './service/basic-auth-htpp-interceptor-service.service';
import { HomeComponent } from './home/home.component';
import { ListaClientiComponent } from './lista-clienti/lista-clienti.component';
import { LibroServizioService } from './service/libro-servizio.service';
import { ClienteServizioService } from './service/cliente-servizio.service';
import { DettaglioClienteComponent } from './dettaglio-cliente/dettaglio-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaLibriComponent,
    AggiungiLibroComponent,
    ModificaLibroComponent,
    DettaglioLibroComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    ListaClientiComponent,
    DettaglioClienteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [LibroServizioService,ClienteServizioService,
    { provide:HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorServiceService, multi:true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
