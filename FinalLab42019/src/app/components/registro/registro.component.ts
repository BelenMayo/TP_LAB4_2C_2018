import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { LoginModel } from 'src/app/models/login.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: LoginModel;

  constructor(public loginService: LoginService) { 

  }

  ngOnInit() {
  }

  registrarUsuario() {

    this.usuario

    this.loginService.guardarRegistro(this.usuario)
      .subscribe(resp => {
        this.usuario = resp;
        console.log(this.usuario);
      },
        error => {
          text: 'Error al registrar usuario';
        });


  }

}
