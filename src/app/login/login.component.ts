import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 username = ''
 password = ''
 invalidLogin = ''

  constructor(private router: Router, 
    private loginservice: AuthenticationService ) 
  { }

  ngOnInit() {
  }

  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['']);
      },
      error => {
        if (error.status == 401) {
        } else throw (error);
      }
    )
    );
  }

}