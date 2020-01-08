import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-cliente-detalle',
  templateUrl: './cliente-detalle.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClienteDetalleComponent implements OnInit {

  // Variables
  cliente: string[];
  id: string;

  constructor(public clientesService: ClientesService, private httpClient: HttpClient, private rutaActiva: ActivatedRoute) {  
    this.rutaActiva.params.subscribe(params=>
      {
        this.traerCliente(params.id);
      });
  }

  ngOnInit() {
  }

  // Trae un cliente
  traerCliente(id) {
    this.clientesService.traerCliente(id)
      .subscribe(resp => {
        this.cliente = resp;
        console.log(this.cliente);
      },
        error => {
          text: 'Error al traer cliente';
        });
  }

}