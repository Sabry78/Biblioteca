import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from "src/app/model/libro";


/* dichiaro i metodi nel servizio libroservizio e nrl componente li chiamo definendoli */


@Injectable({
  providedIn: 'root'
})
export class LibroServizioService {

  private libriUrl: string;

  // username='javainuse'
  // password='password'

  /* http=proprietà con metodi dalla classe Httpclient 
     HttpClient = classe inniettabile con metotodi  (get put post ecc) che uso con http                 */
  constructor(private http: HttpClient) {

    this.libriUrl = 'http://localhost:8090/books';

  }
  /* lista di libri */
  public getLibri(): Observable<Libro[]> {
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.http.get<Libro[]>(this.libriUrl); //, {headers}
  }

  /* salvo un libro */
  public save(libro) {
    return this.http.post<Libro>(this.libriUrl, libro);
  }

  public delete(libro) {
    return this.http.delete<Libro>(this.libriUrl + "/" + libro.id);
  }

  public edit(libro) {
    return this.http.post<Libro>(this.libriUrl, libro);
  }
}