import { Component, OnInit, TemplateRef } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-cliente-listado',
  templateUrl: './cliente-listado.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClienteListadoComponent implements OnInit {

  // Variables
  clientes: string[];
  pageActual: number = 1;
  modalRef: BsModalRef;

  constructor(public clientesService: ClientesService, private httpClient: HttpClient, private modalService: BsModalService) { 
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
      },
        error => {
          text: 'Error al traer clientes';
        });
  }

  // Elimina cliente
  eliminarCliente(id: number) {
    this.clientesService.eliminarCliente(id)
      .subscribe(resp => {
        console.log("Se elimino el cliente");
      },
        error => {
          text: 'Error al eliminar cliente';
        });
  }

  // Abre Modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
