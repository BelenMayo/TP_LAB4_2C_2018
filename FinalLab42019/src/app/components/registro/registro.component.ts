import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { LoginModel } from 'src/app/models/login.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: LoginModel;
  formUsuario: FormGroup;

  constructor(private formBuilder: FormBuilder, public loginService: LoginService, private router: Router
    , private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.formUsuario = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      usuario: ['', Validators.required,],
      password: ['', Validators.required]
    })
  }

  guardarUsuario() {

    this.usuario = new LoginModel().guardarUsuario(this.formUsuario.controls);

    console.log(this.usuario);

    this.loginService.registro(this.usuario)
      .subscribe(resp => {
        this.usuario = resp;
        console.log(this.usuario);
      },
        error => {
          text: 'Error al registrar usuario';
        });

    Swal.fire({
      title: 'Usuario registrado exitosamente!',
      text: 'Bienvenido',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })

    this.router.navigateByUrl('/home');

  }

}
