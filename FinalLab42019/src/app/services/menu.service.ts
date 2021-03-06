import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_REF } from 'src/globales/variables_globales';
import { PedidoModel } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient) { }

    traerMenus() {
      return this.httpClient.get(API_REF + '/ComandaAPI/public/menus/listar/1/0')
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

    traerDetallePedido() {
      return this.httpClient.get(API_REF + '/ComandaAPI/public/detalle_pedidos/listarDetallePedido/1/0')
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

    eliminarDetallePedido(id: number) {
      return this.httpClient.delete(API_REF + `/ComandaAPI/public/detalle_pedidos/eliminar/${id}`)
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
  
    traerMenu(id: number) {
      return this.httpClient.get(API_REF + `/ComandaAPI/public/menus/traer/${id}`)
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

    traerMenuPorCategoria(id: number) {
      return this.httpClient.get(API_REF + `/ComandaAPI/public/menus/traerPorCategoria/${id}`)
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

    traerMenuCompleto() {
      return this.httpClient.get(API_REF + `/ComandaAPI/public/menus/traerMenuCompleto/`)
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

    guardarComanda(pedido: PedidoModel) {
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

}
