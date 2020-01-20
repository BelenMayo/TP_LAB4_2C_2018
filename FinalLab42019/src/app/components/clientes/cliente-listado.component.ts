import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { HttpClient } from '@angular/common/http';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-cliente-listado',
  templateUrl: './cliente-listado.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClienteListadoComponent implements OnInit {

  // Variables
  clientes: string[];
  totalRegistros: number;

  constructor(public clientesService: ClientesService, private httpClient: HttpClient) { 
    setTheme('bs4');
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

export class DemoPaginationLimitComponent {
  maxSize = 5;
  bigTotalItems = 175;
  bigCurrentPage = 1;
}