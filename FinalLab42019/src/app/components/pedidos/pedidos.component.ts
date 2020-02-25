import { Component, OnInit, TemplateRef } from '@angular/core';
import { PedidosService } from '../../services/pedidos.service';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PedidoModel } from '../../models/pedido.model';
import { getLocaleDateFormat } from '@angular/common';
import { Router } from '@angular/router'
import { NavbarService } from 'src/app/services/navbar.service';


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

  pedido: PedidoModel;

  constructor(public pedidosService: PedidosService, private httpClient: HttpClient, private modalService: BsModalService
    , private router: Router, public navbarService : NavbarService) {
    //this.traerPedidos();
    this.traerPedidosDetallePorSector(navbarService.tipoEmpleado);
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
  // traerPedidosDetalle() {
  //   this.pedidosService.traerPedidosDetalle()
  //     .subscribe(resp => {
  //       this.pedidos = resp;
  //       console.log(this.pedidos);
  //     },
  //       error => {
  //         text: 'Error al traer pedidos';
  //       });
  // }

  // Trae todos los pedidos del tipo de empleado
  traerPedidosDetallePorSector(tipoEmpleado) {
    this.pedidosService.traerPedidosDetallePorSector(tipoEmpleado)
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
  cambiarEstadoPedido(id_pedido, id_cliente, id_mesa, codigo_mesa, foto_mesa, total, valor) {

    this.pedido = new PedidoModel();

    this.pedido.id_pedido = id_pedido;
    this.pedido.id_cliente = id_cliente;
    this.pedido.id_mesa = id_mesa;
    this.pedido.codigo_mesa = codigo_mesa;
    this.pedido.codigo_mesa = foto_mesa;
    this.pedido.hora_pedido = new Date();
    this.pedido.tiempo_espera = new Date();
    this.pedido.total = total;
    this.pedido.id_estado_pedido = valor;

    console.log(this.pedido);

    this.pedidosService.modificarPedido(id_pedido, this.pedido)
      .subscribe(resp => {
        console.log("Se modifico estado del pedido");
      },
        error => {
          text: 'Error al modificar estado del pedido';
        });

    this.modalRef.hide()
    this.router.navigateByUrl('/home');
  }

  // Abre Modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


}
