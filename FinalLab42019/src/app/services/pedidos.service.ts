import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PedidoModel } from '../models/pedido.model';
import { API_REF } from 'src/globales/variables_globales';
import { PanelModel } from '../models/panel.model';
import { EstadoPedidoModel } from '../models/pedido.model';


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

  guardarPedido(pedido: PedidoModel, paneles: PanelModel[]) {
    pedido.detallePedido = paneles;
    //debugger;
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

  traerUltimoPedido() {
    return this.httpClient.get(API_REF + '/ComandaAPI/public/pedidos/traerUltimoPedido')
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

  modificarPedido(id: number, estado: EstadoPedidoModel) {

    return this.httpClient.put(API_REF + `/ComandaAPI/public/sector_pedidos/modificar/${id}`, estado)
    .pipe(
      map(resp => {
        if (resp['response']) {
          return resp;
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
