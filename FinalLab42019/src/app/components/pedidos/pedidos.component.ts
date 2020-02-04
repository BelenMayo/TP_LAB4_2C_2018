import { Component, OnInit, TemplateRef } from '@angular/core';
import { PedidosService } from '../../services/pedidos.service';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})

export class PedidosComponent implements OnInit {

  // Variables
  pedidos: string[];
  pageActual: number = 1;
  modalRef: BsModalRef;

  constructor(public pedidosService: PedidosService, private httpClient: HttpClient, private modalService: BsModalService) {
    this.traerPedidos();
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

  // Abre Modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
