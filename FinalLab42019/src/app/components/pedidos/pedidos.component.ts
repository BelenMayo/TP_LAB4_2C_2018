import { Component, OnInit, TemplateRef } from '@angular/core';
import { PedidosService } from '../../services/pedidos.service';
import { ListadosService } from '../../services/listados.service';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PedidoModel } from '../../models/pedido.model';
import { Router } from '@angular/router'
import { NavbarService } from 'src/app/services/navbar.service';
import { SectorPedidoModel } from '../../models/sector_pedido.model';
import { EstadoPedidoModel } from '../../models/pedido.model';
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

  estadoPedido: EstadoPedidoModel;

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

  // Cambia estado del pedido
  cambiarEstadoPedido(IdSectorPedido, nuevoEstado) {

    this.estadoPedido = EstadoPedidoModel.guardarEstadoPedido(nuevoEstado);

    this.pedidosService.modificarPedido(IdSectorPedido, this.estadoPedido)
      .subscribe(resp => {
        console.log("Se modifico estado del pedido");
        this.listadosService.refrescarPedidos();
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
