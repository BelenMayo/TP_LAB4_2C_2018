import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_REF } from 'src/globales/variables_globales';
import { PanelModel } from '../models/panel.model';
import { PedidoModel } from '../models/pedido.model';


@Injectable({
  providedIn: 'root'
})
export class SectorPedidoService {

  constructor(private httpClient: HttpClient) { }

  insertarDetallePedidoMozo(sectorPedido: PedidoModel) {
    return this.httpClient.post(API_REF + '/ComandaAPI/public/sector_pedidos/listar/1/0', sectorPedido)
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

  consultarEstadoPedido(codigoPedido) {
    return this.httpClient.get(API_REF + `/ComandaAPI/public/sector_pedidos/consultar/${codigoPedido}`)
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

  // entregarPedidoMozo(sectorPedido: PedidoModel) {
  //   return this.httpClient.post(API_REF + '/ComandaAPI/public/sector_pedidos/listar/1/0', sectorPedido)
  //     .pipe(
  //       map(resp => {
  //         if (resp['data'].length > 0) {
  //           return resp['data'];
  //         } else {
  //           return false;
  //         }
  //       })
  //     );
  // }

  traerDetallePedidoTotal() {
    return this.httpClient.get(API_REF + `/ComandaAPI/public/pedidos/listarSectorPedidos/1/0`)
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

  eliminarSectorPedido(id: number) {
    return this.httpClient.delete(API_REF + `/ComandaAPI/public/sector_pedidos/eliminar/${id}`)
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
