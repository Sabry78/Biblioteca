import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User {
  constructor(
    public status: string,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {}

  /* dichiaro i metodi authentiacate e logout */
  authenticate(username,password)
  {
  // sessionStorage.setItem('username', username)
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  return this.httpClient.get<User>('http://localhost:8090/validateLogin',{headers}).pipe(
   map(
     userData => {
      sessionStorage.setItem('username',username);
      let authString = 'Basic ' + btoa(username + ':' + password);
      sessionStorage.setItem('basicauth', authString);
      return userData;
     }
   )

  );
}

logOut() {
sessionStorage.removeItem('username')

}

isUserLoggedIn() {
  let user = sessionStorage.getItem('username')
  return !(user === null)
}

}