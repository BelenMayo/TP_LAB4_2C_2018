import { Component, OnInit, TemplateRef } from '@angular/core';
import { SectorPedidoService } from '../../services/sector-pedido.service';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


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

  constructor(public sectorPedidoService: SectorPedidoService, private httpClient: HttpClient, private modalService: BsModalService) {
    this.traerDetallePedidoTotal();
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
  }


  // Abre Modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


}
