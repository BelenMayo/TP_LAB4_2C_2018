import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EmpleadoModel } from '../models/empleado.model';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private httpClient: HttpClient) { }

  traerEmpleados() {
    return this.httpClient.get('http://localhost/ComandaAPI/public/empleados/listar/1/0')
      .pipe(
        map(resp => {
          console.log(resp);
          if (resp['data'].length > 0) {
            return resp['data'];
          } else {
            return false;
          }
        })
      );
  }

  traerEmpleado(id: number) {
    return this.httpClient.get('http://localhost/ComandaAPI/public/empleados/traer/${id}', )
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

  guardarEmpleado(empleado: EmpleadoModel) {
    return this.httpClient.post('http://localhost/ComandaAPI/public/empleados/registrar', empleado)
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

  modificarEmpleado(empleado: EmpleadoModel) {
    return this.httpClient.put('http://localhost/ComandaAPI/public/empleados/modificar/?', empleado)
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

  eliminarEmpleado(id: number) {
    return this.httpClient.delete('http://localhost/ComandaAPI/public/empleados/eliminar/${id}')
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
