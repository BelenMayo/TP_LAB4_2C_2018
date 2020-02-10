import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PedidoModel } from '../models/pedido.model';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private httpClient: HttpClient) { }

  traerPedidos() {
    return this.httpClient.get('http://localhost/ComandaAPI/public/pedidos/listar/1/0')
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

  traerPedidosDetalle() {
    return this.httpClient.get('http://localhost/ComandaAPI/public/pedidos/listarPedidos/1/0')
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
    return this.httpClient.get(`http://localhost/ComandaAPI/public/pedidos/traer/${id}`)
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
    return this.httpClient.post('http://localhost/ComandaAPI/public/pedidos/registrar/', pedido)
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

  modificarPedido(id: number, pedido: PedidoModel) {
    return this.httpClient.put(`http://localhost/ComandaAPI/public/pedidos/modificar/${id}`, pedido)
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
    return this.httpClient.delete(`http://localhost/ComandaAPI/public/pedidos/eliminar/${id}`)
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
