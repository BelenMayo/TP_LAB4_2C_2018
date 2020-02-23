import { Component, OnInit } from '@angular/core';
import { CaptchaComponent } from 'angular-captcha';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'
import { NavbarService } from 'src/app/services/navbar.service';
import Swal from 'sweetalert2'
import { ChequeaLoginModel } from 'src/app/models/chequea_login';


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

  login: ChequeaLoginModel;
  formLogin: FormGroup;

  constructor(private router: Router, private navbarService: NavbarService, private httpClient: HttpClient
    , public loginService: LoginService,private formBuilder: FormBuilder) {
    this.usuario = "";
    this.password = "";

    this.navbarService.socio = false
    this.navbarService.cliente = false
    this.navbarService.mozo = false
    this.navbarService.cocinero = false
    this.navbarService.bartender = false
  }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      usuario: ['', Validators.required,],
      password: ['', Validators.required]
    })
  }

  entrarLogin() {
    this.usuario = 'socio';
    this.password = 'mozo';

    this.router.navigateByUrl('/home');
  }

  loguearse() {

    this.login = new ChequeaLoginModel().chequearUsuario(this.formLogin.controls);

    this.loginService.login(this.login)
      .subscribe(resp => {
        this.usuario = resp;
        console.log(this.usuario);
      },
        error => {
          text: 'Error al registrar usuario';
        });

    Swal.fire({
      title: 'Usuario logueado exitosamente!',
      text: 'Bienvenido',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })

    this.router.navigateByUrl('/home');
  }

  Socio() {
    this.usuario = "Socio";
    this.password = "123456";

    Swal.fire({
      title: 'Usuario logueado exitosamente!',
      text: 'Bienvenido',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })

    this.navbarService.socio = true
    this.router.navigateByUrl('/home');
  }

  Cliente() {
    this.usuario = "Cliente";
    this.password = "123456";

    Swal.fire({
      title: 'Usuario logueado exitosamente!',
      text: 'Bienvenido',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })

    this.navbarService.cliente = true
    this.router.navigateByUrl('/home');
  }

  Mozo() {
    this.usuario = "Mozo";
    this.password = "123456";

    Swal.fire({
      title: 'Usuario logueado exitosamente!',
      text: 'Bienvenido',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })

    this.navbarService.mozo = true
    this.router.navigateByUrl('/home');
  }

  Cocinero() {
    this.usuario = "Cocinero";
    this.password = "123456";

    Swal.fire({
      title: 'Usuario logueado exitosamente!',
      text: 'Bienvenido',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })

    this.navbarService.cocinero = true
    this.router.navigateByUrl('/home');
  }

  Bartender() {
    this.usuario = "Bartender";
    this.password = "123456";

    Swal.fire({
      title: 'Usuario logueado exitosamente!',
      text: 'Bienvenido',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })

    this.navbarService.bartender = true
    this.router.navigateByUrl('/home');
  }

}
