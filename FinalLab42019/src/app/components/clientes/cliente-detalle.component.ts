import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { HttpClient } from '@angular/common/http';

import * as $ from "jquery";

@Component({
  selector: 'app-cliente-detalle',
  templateUrl: './cliente-detalle.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClienteDetalleComponent implements OnInit {

  // Variables
  cliente: string[];

  constructor(public clientesService: ClientesService, private httpClient: HttpClient) {   
    this.traerCliente();
  }

  ngOnInit() {
  }

  // Trae todos los clientes
  traerCliente() {
    this.clientesService.traerCliente(1)
      .subscribe(resp => {
        this.cliente = resp;
        console.log(this.cliente);
      },
        error => {
          text: 'Error al traer cliente';
        });
  }

}
