import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroServizioService } from '../service/libro-servizio.service';
import { Location } from '@angular/common';
import { Libro } from '../model/libro';

@Component({
  selector: 'app-modifica-libro',
  templateUrl: './modifica-libro.component.html',
  styleUrls: ['./modifica-libro.component.css']
})
export class ModificaLibroComponent implements OnInit {

  libro:Libro
  constructor(private route: ActivatedRoute, private router:Router,
    private libroServizioService: LibroServizioService, private location:Location) 
  { }

  ngOnInit() 
  {}

  onSubmit()
  {
    this.libroServizioService.edit(this.libro).subscribe(result=> this.gotoBookList());

  }
  gotoBookList()  {
  this.router.navigate(['libri']);
  }
goBack(){
  this.location.back();
}
}