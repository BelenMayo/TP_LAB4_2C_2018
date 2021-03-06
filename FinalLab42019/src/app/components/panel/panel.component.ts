import { Component, OnInit, TemplateRef } from '@angular/core';
import { SectorPedidoService } from '../../services/sector-pedido.service';
import { ListadosService } from '../../services/listados.service';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router'
import { SectorPedidoModel } from '../../models/sector_pedido.model';
import { EstadoPedidoModel } from '../../models/pedido.model';
import { PedidosService } from '../../services/pedidos.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  // Variables
  sector_pedido: string[];
  pageActual: number = 1;
  modalRef: BsModalRef;

  sirvePedido: SectorPedidoModel;

  estadoPedido: EstadoPedidoModel;

  constructor(public sectorPedidoService: SectorPedidoService, private httpClient: HttpClient
    , private modalService: BsModalService, private router: Router, public pedidosService: PedidosService
    , public listadosService: ListadosService) {
    this.traerDetallePedidoTotal();
    this.listadosService.refrescarBarra();
  }

  ngOnInit() {
  }

  // Trae todos los sector pedido
  traerDetallePedidoTotal() {
    this.sectorPedidoService.traerDetallePedidoTotal()
      .subscribe(resp => {
        this.sector_pedido = resp;
        console.log(this.sector_pedido);
      },
        error => {
          text: 'Error al traer clientes';
        });
  }

  // Cambia estado del pedido
  cambiarEstadoPedido(IdSectorPedido, nuevoEstado) {

    this.estadoPedido = EstadoPedidoModel.guardarEstadoPedido(nuevoEstado);

    this.pedidosService.modificarPedido(IdSectorPedido, this.estadoPedido)
      .subscribe(resp => {
        console.log("Se modifico estado del pedido");
        this.listadosService.refrescarBarra();
      },
        error => {
          text: 'Error al modificar estado del pedido';
        });

    Swal.fire({
      title: 'Se ha entregado el pedido!',
      text: 'Muchas gracias',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })

    this.router.navigateByUrl('/panel');
  }

}
