import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  // Variables
  usuario: string;

  constructor(private rutaActiva: ActivatedRoute, private httpClient: HttpClient) {
    this.rutaActiva.params.subscribe(params => {
      console.log(params)
      this.verificarUsuario(params);
    });
  }

  ngOnInit() {
  }

  verificarUsuario(usuario) {
    this.usuario = usuario;

    console.log(this.usuario)
  }

}
