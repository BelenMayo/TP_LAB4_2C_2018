import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ClienteModel } from '../models/cliente.model';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient: HttpClient) { }

  traerClientes() {
    return this.httpClient.get('http://localhost/ComandaAPI/public/clientes/listar/1/0')
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

  traerCliente(id: number) {
    return this.httpClient.get(`http://localhost/ComandaAPI/public/clientes/traer/${id}`)
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

  guardarCliente(cliente: ClienteModel) {
    return this.httpClient.post('http://localhost/ComandaAPI/public/clientes/registrar', cliente)
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

  modificarCliente(cliente: ClienteModel) {
    return this.httpClient.put('http://localhost/ComandaAPI/public/clientes/modificar/?', cliente)
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

  eliminarCliente(id: number) {
    return this.httpClient.delete('http://localhost/ComandaAPI/public/clientes/eliminar/${id}')
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