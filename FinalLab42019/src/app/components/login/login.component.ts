import { Component, OnInit } from '@angular/core';
import { CaptchaComponent } from 'angular-captcha'; 
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginComponent]
})

export class LoginComponent implements OnInit {

  // Variables
  usuario: string;
  password: string;

  constructor(private router: Router) { 
    this.usuario = 'Prueba';
    this.password = '123456';
  }

  ngOnInit() {
  }

  entrarLogin(){
    this.usuario = 'socio';
    this.password = 'mozo';

    this.router.navigateByUrl('/home');
  }

  loguearse(usuario, password){
    this.usuario = usuario;
    this.password = password;

    // this.router.navigateByUrl('/home');
  }

}
