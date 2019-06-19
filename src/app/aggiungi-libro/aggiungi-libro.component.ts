import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroServizioService } from '../service/libro-servizio.service';
import { Location } from '@angular/common';
import { Libro } from '../model/libro';

@Component({
  selector: 'app-aggiungi-libro',
  templateUrl: './aggiungi-libro.component.html',
  styleUrls: ['./aggiungi-libro.component.css']
})
export class AggiungiLibroComponent implements OnInit {

  libro: Libro

  constructor(private route: ActivatedRoute, private router: Router, private libroServizioService: LibroServizioService,
    private location: Location) {
      this.libro=new Libro();
     }

  ngOnInit() {}
  
  onSubmit() {
    this.libroServizioService.save(this.libro).subscribe(result => this.gotoBookList());
  }
 
  gotoBookList() {
    this.router.navigate(['/Libri']);
  }

  goBack(){
    this.location.back();
  }
}
