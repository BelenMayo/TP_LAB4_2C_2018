import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // Variables
  usuario: string;
  usuarioV: boolean = true;

  constructor(private rutaActiva: ActivatedRoute, public navbarService : NavbarService) {
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
