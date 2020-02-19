import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_REF } from 'src/globales/variables_globales';


@Injectable({
  providedIn: 'root'
})
export class SectorPedidoService {

  constructor(private httpClient: HttpClient) { }

  traerDetallePedidosPedidos() {
    return this.httpClient.get(API_REF + '/ComandaAPI/public/sector_pedidos/listar/1/0')
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

  traerDetallePedidoTotal() {
    return this.httpClient.get(API_REF + `/ComandaAPI/public/sector_pedidos/listarSectorPedidos/1/0`)
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

  // guardarDetallePedido(pedido: PedidoModel) {
  //   return this.httpClient.post('http://localhost/ComandaAPI/public/pedidos/registrar/', pedido)
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

}
