import { Component, OnInit, TemplateRef } from '@angular/core';
import { PedidosService } from '../../services/pedidos.service';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-pedido-listado',
  templateUrl: './pedido-listado.component.html',
  styleUrls: ['./pedidos.component.css']
})

export class PedidoListadoComponent implements OnInit {
  // Variables
  pedidos: string[];
  pageActual: number = 1;
  modalRef: BsModalRef;

  constructor(public pedidosService: PedidosService, private httpClient: HttpClient, private modalService: BsModalService) {
    //this.traerPedidos();
    this.traerPedidosDetalle();
  }

  ngOnInit() {
  }

  // Trae todos los pedidos
  traerPedidos() {
    this.pedidosService.traerPedidos()
      .subscribe(resp => {
        this.pedidos = resp;
        console.log(this.pedidos);
      },
        error => {
          text: 'Error al traer pedidos';
        });
  }

  // Trae todos los pedidos
  traerPedidosDetalle() {
    this.pedidosService.traerPedidosDetalle()
      .subscribe(resp => {
        this.pedidos = resp;
        console.log(this.pedidos);
      },
        error => {
          text: 'Error al traer pedidos';
        });
  }

  // Elimina pedido
  eliminarPedido(id: number) {
    this.pedidosService.eliminarPedido(id)
      .subscribe(resp => {
        console.log("Se elimino el pedido");
      },
        error => {
          text: 'Error al eliminar pedido';
        });
  }

  // Cambia estado del pedido
  cambiarEstadoPedido(id: number) {
    this.pedidosService.eliminarPedido(id)
      .subscribe(resp => {
        console.log("Se elimino el pedido");
      },
        error => {
          text: 'Error al eliminar pedido';
        });
  }

  // Abre Modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


}
