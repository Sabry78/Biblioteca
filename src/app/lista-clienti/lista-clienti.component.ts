import { Component, OnInit } from '@angular/core';
import {ClienteServizioService} from 'src/app/service/cliente-servizio.service';
import {Cliente} from 'src/app/model/cliente';
import{Router} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-lista-clienti',
  templateUrl: './lista-clienti.component.html',
  styleUrls: ['./lista-clienti.component.css']
})
export class ListaClientiComponent implements OnInit {

  clienti: Cliente[];

  constructor(private clienteServioService:ClienteServizioService, private router:Router,
  private location: Location) 
  { }

  ngOnInit() {
  this.clienteServioService.getClienti()
  .subscribe(data =>{
    this.clienti= data;
    });

}

delete(cliente:Cliente) 
{
  this.clienteServioService.delete(cliente)
  .subscribe(data =>{
    this.clienti=this.clienti.filter(u=>u!==cliente);

  })
};

gotoClienteDettaglio(cliente:Cliente)
{
sessionStorage.setItem('cliente',JSON.stringify(cliente))
this.router.navigate(['DettaglioCliente']);
}
goBack()
{
  this.location.back();
}

}