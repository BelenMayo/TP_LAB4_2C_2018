import { Component, OnInit, TemplateRef } from '@angular/core';
import { PedidosService } from '../../services/pedidos.service';
import { ListadosService } from '../../services/listados.service';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PedidoModel } from '../../models/pedido.model';
import { Router } from '@angular/router'
import { NavbarService } from 'src/app/services/navbar.service';
import { SectorPedidoModel } from '../../models/sector_pedido.model';
import { SectorPedidoService } from 'src/app/services/sector-pedido.service';
import Swal from 'sweetalert2'


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
  barraPedido: PedidoModel;

  sirvePedido: SectorPedidoModel;

  constructor(public pedidosService: PedidosService, private httpClient: HttpClient, private modalService: BsModalService
    , private router: Router, public navbarService: NavbarService, public sectorPedidoService: SectorPedidoService
    , public listadosService: ListadosService) {
    this.traerPedidosDetallePorSector(navbarService.tipoEmpleado);
    this.listadosService.refrescarPedidos();
  }

  ngOnInit() {
  }

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
  cambiarEstadoPedido(nuevoEstado) {

    this.sirvePedido = new SectorPedidoModel();

    this.sirvePedido.id_pedido = this.listadosService.pedidos[0]['id_pedido'];
    this.sirvePedido.id_empleado = this.listadosService.pedidos[0]['idEmpleado'];
    this.sirvePedido.id_menu = this.listadosService.pedidos[0]['idMenu'];
    this.sirvePedido.id_categoria = this.listadosService.pedidos[0]['idCategoria'];
    this.sirvePedido.id_seccion = this.listadosService.pedidos[0]['idSeccion'];
    this.sirvePedido.hora_inicio = new Date();
    this.sirvePedido.tiempo_finalizacion = new Date();
    this.sirvePedido.id_estado_pedido = nuevoEstado;

    console.log(this.sirvePedido);

    this.pedidosService.modificarPedido(this.pedidos[0]['idSectorPedido'], this.sirvePedido)
      .subscribe(resp => {
        console.log("Se modifico estado del pedido");
      },
        error => {
          text: 'Error al modificar estado del pedido';
        });

    Swal.fire({
      title: 'Se ha modificado el pedido!',
      text: 'Muchas gracias',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })

    this.router.navigateByUrl('/pedido');
  }
}
