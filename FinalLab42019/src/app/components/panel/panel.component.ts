import { Component, OnInit, TemplateRef } from '@angular/core';
import { SectorPedidoService } from '../../services/sector-pedido.service';
import { ListadosService } from '../../services/listados.service';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router'
import { PedidoModel } from '../../models/pedido.model';
import { SectorPedidoModel } from '../../models/sector_pedido.model';
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

  // Eliminar del panel
  entregarPedido(id: number) {
    this.sectorPedidoService.eliminarSectorPedido(id)
      .subscribe(resp => {
        console.log("Se elimino el pedido");
      },
        error => {
          text: 'Error al eliminar pedido';
        });

    Swal.fire({
      title: 'El item ha sido servido!',
      text: 'Muchas gracias',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })

    this.router.navigateByUrl('/home');
  }

  // Cambia estado del pedido
  cambiarEstadoPedido(nuevoEstado) {

    this.sirvePedido = new SectorPedidoModel();

    this.sirvePedido.id_pedido = this.sector_pedido[0]['id_pedido'];
    this.sirvePedido.id_empleado = this.sector_pedido[0]['idEmpleado'];
    this.sirvePedido.id_menu = this.sector_pedido[0]['idMenu'];
    this.sirvePedido.id_categoria = this.sector_pedido[0]['idCategoria'];
    this.sirvePedido.id_seccion = this.sector_pedido[0]['idSeccion'];
    this.sirvePedido.hora_inicio = new Date();
    this.sirvePedido.tiempo_finalizacion = new Date();
    this.sirvePedido.id_estado_pedido = nuevoEstado;

    console.log(this.sirvePedido);

    this.pedidosService.modificarPedido(this.sector_pedido[0]['idSectorPedido'], this.sirvePedido)
      .subscribe(resp => {
        console.log("Se modifico estado del pedido");
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
