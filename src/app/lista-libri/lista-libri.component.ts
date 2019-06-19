import { Component, OnInit } from '@angular/core';
import { LibroServizioService } from '../service/libro-servizio.service';
import { Libro } from '../model/libro';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-lista-libri',
  templateUrl: './lista-libri.component.html',
  styleUrls: ['./lista-libri.component.css']
})
export class ListaLibriComponent implements OnInit {

public libri: Libro[];
  

  constructor( private libroServizioService: LibroServizioService,
    private router: Router, private location: Location) { }

  ngOnInit() {    
    this.libroServizioService.getLibri().subscribe(data=> {
     this.libri = data;
    
  });

}

delete (libro:Libro) : void
{
  this.libroServizioService.delete(libro)
    .subscribe( data => {
      this.libri = this.libri.filter(u => u !== libro);
    })
};
goToBookEditor(libro: Libro) {
  this.router.navigate(['/Modifica']);
}
goToBookDetails(libro: Libro){
  sessionStorage.setItem('libro',JSON.stringify(libro));
  /*sessionStorage.setItem è la memorizzazione del broswer = memorizza la stringa trasformata in jason chiave valore di un libro  */
  this.router.navigate(['/DettaglioLibro']);
}
goBack(){
  this.location.back();
}

}
