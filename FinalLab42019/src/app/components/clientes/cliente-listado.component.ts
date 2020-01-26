import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cliente-listado',
  templateUrl: './cliente-listado.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClienteListadoComponent implements OnInit {

  // Variables
  clientes: string[];
  pageActual: number = 1;

  constructor(public clientesService: ClientesService, private httpClient: HttpClient) { 
    this.traerClientes();
  }

  ngOnInit() {
  }

  // Trae todos los clientes
  traerClientes() {
    this.clientesService.traerClientes()
      .subscribe(resp => {
        this.clientes = resp;
        console.log(this.clientes);
        this.totalRegistros = 6;
      },
        error => {
          text: 'Error al traer clientes';
        });
  }

}
