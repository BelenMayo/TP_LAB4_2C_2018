import { Component, OnInit } from '@angular/core';
import { CaptchaComponent } from 'angular-captcha';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'
import { NavbarService } from 'src/app/services/navbar.service';
import Swal from 'sweetalert2'
import { ChequeaLoginModel } from 'src/app/models/chequeaLogin';


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
    , public loginService: LoginService, private formBuilder: FormBuilder) {
    this.usuario = "";
    this.password = "";

    this.navbarService.socio = false
    this.navbarService.cliente = false
    this.navbarService.mozo = false
    this.navbarService.cocinero = false
    this.navbarService.bartender = false
    this.navbarService.cervecero = false

    this.navbarService.detalleTipoEmpleado = "";
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

  loginUsuario() {
    this.login = new ChequeaLoginModel().chequearUsuario(this.formLogin.controls);

    console.log(this.login);

    this.loginService.loguearse(this.login)
      .subscribe(resp => {
        this.login = resp;
        console.log(this.login);

        if (this.login) {
          Swal.fire({
            title: 'Usuario logueado correctamente!',
            text: 'Bienvenido',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          })

          this.navbarService.cliente = true;
          this.navbarService.valorUsuario = "Cliente";
          this.navbarService.tipoEmpleado = 6;
          this.router.navigateByUrl('/home');

        } else {

          Swal.fire({
            title: 'Usuario invalido!',
            text: 'Vuelva a ingresar su usuario',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
          })
        }

      },
        error => {
          text: 'Error al registrar usuario';
        });
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
    this.navbarService.tipoEmpleado = 5;
    this.navbarService.detalleTipoEmpleado = "Socio";
    this.router.navigateByUrl('/home');
  }

  // Cliente() {
  //   this.usuario = "Cliente";
  //   this.password = "123456";

  //   Swal.fire({
  //     title: 'Usuario logueado exitosamente!',
  //     text: 'Bienvenido',
  //     icon: 'success',
  //     showConfirmButton: false,
  //     timer: 1500
  //   })

  //   this.navbarService.cliente = true
  //   this.router.navigateByUrl('/home');
  // }

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
    this.navbarService.tipoEmpleado = 4;
    this.navbarService.detalleTipoEmpleado = "Mozo";
    this.router.navigateByUrl('/panel');
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
    this.navbarService.tipoEmpleado = 3;
    this.navbarService.detalleTipoEmpleado = "Cocinero";
    this.router.navigateByUrl('/pedido');
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
    this.navbarService.tipoEmpleado = 1;
    this.navbarService.detalleTipoEmpleado = "Bartender";
    this.router.navigateByUrl('/pedido');
  }

  Cervecero() {
    this.usuario = "Cervecero";
    this.password = "123456";

    Swal.fire({
      title: 'Usuario logueado exitosamente!',
      text: 'Bienvenido',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })

    this.navbarService.cervecero = true
    this.navbarService.tipoEmpleado = 2;
    this.navbarService.detalleTipoEmpleado = "Cervecero";
    this.router.navigateByUrl('/pedido');
  }

}
