import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MesaModel } from '../models/mesa.model';

@Injectable({
  providedIn: 'root'
})
export class MesasService {

  constructor(private httpClient: HttpClient) { }

  traerMesas() {
    return this.httpClient.get('http://localhost/ComandaAPI/public/mesas/listar/1/0')
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
    return this.httpClient.get('http://localhost/ComandaAPI/public/mesas/listarEstadoMesa/1/0')
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
    return this.httpClient.get(`http://localhost/ComandaAPI/public/mesas/traer/${id}`)
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

  guardarMesa(id: number, mesa: MesaModel) {
    return this.httpClient.post('http://localhost/ComandaAPI/public/mesas/registrar/', mesa)
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
    return this.httpClient.put(`http://localhost/ComandaAPI/public/mesas/modificar/${id}`, mesa)
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

  eliminarMesa(id: number) {
    return this.httpClient.delete(`http://localhost/ComandaAPI/public/mesas/eliminar/${id}`)
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
