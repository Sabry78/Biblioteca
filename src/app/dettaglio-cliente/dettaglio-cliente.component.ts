import { Component, OnInit } from '@angular/core';
import { Cliente} from 'src/app/model/cliente';
import {Router, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-dettaglio-cliente',
  templateUrl: './dettaglio-cliente.component.html',
  styleUrls: ['./dettaglio-cliente.component.css']
})
export class DettaglioClienteComponent implements OnInit {

  cliente: Cliente;

  constructor(private route: ActivatedRoute,
    private router: Router, private location: Location)
     { }

  ngOnInit() 
  { this.cliente= JSON.parse(sessionStorage.getItem('cliente'));
  }

  goBack(){
    this.location.back();
  }
}
