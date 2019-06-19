import { Component, OnInit } from '@angular/core';
import { Libro } from "src/app/model/Libro";
import { ActivatedRoute, Router } from '@angular/router';
import {LibroServizioService} from 'src/app/service/libro-servizio.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-dettaglio-libro',
  templateUrl: './dettaglio-libro.component.html',
  styleUrls: ['./dettaglio-libro.component.css']
})
export class DettaglioLibroComponent implements OnInit {
  
  libro: Libro = new Libro();
  /* creo il libro */
  constructor(private route: ActivatedRoute, private router: Router, private LibroServizioService: LibroServizioService,
    private location: Location) { }

  ngOnInit() {
   this.libro= JSON.parse(sessionStorage.getItem('libro'));
   /* libro verrà trasformato in una stringa jason  sessionStorage (la memoria del broswer)  prenderà un item cioè un libro*/
  } 

  goBack(){
    this.location.back();
  }


}
