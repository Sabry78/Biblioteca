import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message: string;

  constructor(private route:Router) { 
    this.message= 'Buongiorno ' +  sessionStorage.getItem('username');
  }

  ngOnInit() {
  }
  
 goToLibri(){
   this.route.navigate(['/libri']);
 }
 
 goToClienti()
 {
   this.route.navigate(['/clienti']);

}
}