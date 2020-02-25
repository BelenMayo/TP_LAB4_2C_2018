import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PedidoModel } from '../models/pedido.model';
import { DetallePedidoModel } from '../models/detalle_pedido.model';
import { API_REF } from 'src/globales/variables_globales';
import { PanelModel } from '../models/panel.model';
import { SectorPedidoModel } from '../models/sector_pedido.model';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private httpClient: HttpClient) { }

  traerPedidos() {
    return this.httpClient.get(API_REF + '/ComandaAPI/public/pedidos/listar/1/0')
      .pipe(
        map(resp => {
          if (resp['data'].length > 0) {
            return resp['data'];
          } else {
            return false;
          }
        })
      );
  }

  traerPedidosDetallePorSector(tipoEmpleado: number) {
    return this.httpClient.get(API_REF + `/ComandaAPI/public/pedidos/listarPedidos/1/0/${tipoEmpleado}`)
      .pipe(
        map(resp => {
          if (resp['data'].length > 0) {
            return resp['data'];
          } else {
            return false;
          }
        })
      );
  }

  traerPedido(id: number) {
    return this.httpClient.get(API_REF + `/ComandaAPI/public/pedidos/traer/${id}`)
      .pipe(
        map(resp => {
          if (resp['data'].length > 0) {
            return resp['data'];
          } else {
            return false;
          }
        })
      );
  }

  guardarPedido(pedido: PedidoModel) {
    return this.httpClient.post(API_REF + '/ComandaAPI/public/pedidos/registrar', pedido)
      .pipe(
        map(resp => {
          if (resp['data'].length > 0) {
            return resp['data'];
          } else {
            return false;
          }
        })
      );
  }

  guardarDetallePedido(detallePedido: DetallePedidoModel) {
    return this.httpClient.post(API_REF + '/ComandaAPI/public/detalle_pedidos/registrar', detallePedido)
      .pipe(
        map(resp => {
          if (resp['data'].length > 0) {
            return resp['data'];
          } else {
            return false;
          }
        })
      );
  }

  guardarPanel(panel: PanelModel) {
    return this.httpClient.post(API_REF + '/ComandaAPI/public/sector_pedidos/registrar', panel)
      .pipe(
        map(resp => {
          if (resp['data'].length > 0) {
            return resp['data'];
          } else {
            return false;
          }
        })
      );
  }

  modificarPedido(id: number, pedido: SectorPedidoModel) {
    return this.httpClient.put(API_REF + `/ComandaAPI/public/sector_pedidos/modificar/${id}`, pedido)
    .pipe(
      map(resp => {
        if (resp['data'].length > 0) {
          return resp['data'];
        } else {
          return false;
        }
      })
    );
  }

  eliminarPedido(id: number) {
    return this.httpClient.delete(API_REF + `/ComandaAPI/public/pedidos/eliminar/${id}`)
    .pipe(
      map(resp => {
        if (resp['data'].length > 0) {
          return resp['data'];
        } else {
          return false;
        }
      })
    );
  }
  
}
