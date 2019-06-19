import { Injectable } from '@angular/core';
import  { HttpClient, HttpHeaders} from '@angular/common/http';
import{ Observable} from 'rxjs';
import { Cliente} from 'src/app/model/cliente';


@Injectable()
export class ClienteServizioService {

  private clientiUrl: string;

  constructor(private http:HttpClient) { 
    this.clientiUrl= 'http://localhost:8090/customers';
  }

  public getClienti(): Observable <Cliente[]>{
    return this.http.get<Cliente[]> (this.clientiUrl)
  }
  public save (cliente: Cliente){
    return this.http.post<Cliente>(this.clientiUrl,cliente);
  }
  
  public delete(cliente:Cliente){
  return this.http.delete<Cliente> (this.clientiUrl+ "/" + cliente.id);
}

}