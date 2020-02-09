import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../services/pedidos.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pedido-detalle',
  templateUrl: './pedido-detalle.component.html',
  styleUrls: ['./pedidos.component.css']
})

export class PedidoDetalleComponent implements OnInit {

  // Variables
  pedido: string[];
  id: string;

  constructor(public pedidosService: PedidosService, private httpClient: HttpClient, private rutaActiva: ActivatedRoute) { 
    this.rutaActiva.params.subscribe(params=>
      {
        this.traerPedido(params.id);
      });
  }

  ngOnInit() {
  }

  // Trae un pedido
  traerPedido(id) {
    this.pedidosService.traerPedido(id)
      .subscribe(resp => {
        this.pedido = resp;
        console.log(this.pedido);
      },
        error => {
          text: 'Error al traer pedido';
        });
  }

}
