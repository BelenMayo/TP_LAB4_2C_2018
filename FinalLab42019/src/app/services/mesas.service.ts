import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MesaModel } from '../models/mesa.model';
import { API_REF } from 'src/globales/variables_globales';


@Injectable({
  providedIn: 'root'
})
export class MesasService {

  constructor(private httpClient: HttpClient) { }

  traerMesas() {
    return this.httpClient.get(API_REF + '/ComandaAPI/public/mesas/listar/1/0')
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

  traerMesasConEstado() {
    return this.httpClient.get(API_REF + '/ComandaAPI/public/mesas/listarEstadoMesa/1/0')
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

  traerMesa(id: number) {
    return this.httpClient.get(API_REF + `/ComandaAPI/public/mesas/traer/${id}`)
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

  modificarMesa(id: number, mesa: MesaModel) {
    return this.httpClient.put(API_REF + `/ComandaAPI/public/mesas/modificar/${id}`, mesa)
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
