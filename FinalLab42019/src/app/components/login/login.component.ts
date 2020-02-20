import { Component, OnInit } from '@angular/core';
import { CaptchaComponent } from 'angular-captcha';
import { Router } from '@angular/router'
import { NavbarService } from 'src/app/services/navbar.service';


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

  valorSocio: string = "Socio"
  valorMozo: string = "Mozo"
  valorCocinero: string = "Cocinero"
  valorBartender: string = "Bartender"

  constructor(private router: Router, private navbarService: NavbarService) {
    this.usuario = 'Prueba';
    this.password = '123456';
  }

  ngOnInit() {
  }

  entrarLogin() {
    this.usuario = 'socio';
    this.password = 'mozo';

    this.router.navigateByUrl('/home');
  }

  loguearse(usuario, password) {
    this.usuario = usuario;
    this.password = password;

    this.router.navigateByUrl('/home');
  }

  Socio() {
    this.navbarService.socio = true
    this.router.navigateByUrl('/home');
  }

  Cliente() {
    this.navbarService.cliente = true
    this.router.navigateByUrl('/home');
  }

  Mozo() {
    this.navbarService.mozo = true
    this.router.navigateByUrl('/home');
  }

  Cocinero() {
    this.navbarService.cocinero = true
    this.router.navigateByUrl('/home');
  }

  Bartender() {
    this.navbarService.bartender = true
    this.router.navigateByUrl('/home');
  }

}
