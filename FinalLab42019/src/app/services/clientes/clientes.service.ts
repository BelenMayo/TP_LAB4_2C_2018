import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ClienteModel } from '../../models/cliente.model';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient: HttpClient) { }

  public clientes: ClienteModel[];

  traerClientes() {
    // this.httpClient.get('http://localhost/ComandaAPI/public/clientes/listar/1/0').subscribe(data => {
    //   this.clientes = data;  
    // });

    return this.httpClient.get('http://localhost/ComandaAPI/public/clientes/listar/1/0')
      .pipe(
        map(resp => {
          debugger;
          if (resp['data'].length > 0) {
            return resp['data'];
          } else {
            return false;
          }
        })
      );

  }

guardarCliente() {
  this.httpClient.get('localhost/ComandaAPI/public/prueba/registrar').subscribe(data => {
    console.log(data);
  });
}
modificarCliente() {
  this.httpClient.get('localhost/ComandaAPI/public/prueba/modificar/?').subscribe(data => {
    console.log(data);
  });
}

eliminarCliente() {
  this.httpClient.get('localhost/ComandaAPI/public/prueba/eliminar/?').subscribe(data => {
    console.log(data);
  });
}

}