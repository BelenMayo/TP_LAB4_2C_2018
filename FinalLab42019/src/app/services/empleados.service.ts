import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EmpleadoModel } from '../models/empleado.model';
import { API_REF } from 'src/globales/variables_globales';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private httpClient: HttpClient) { }

  traerEmpleados() {
    return this.httpClient.get(API_REF + '/ComandaAPI/public/empleados/listar/1/0')
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
    return this.httpClient.get(API_REF + `/ComandaAPI/public/empleados/traer/${id}`)
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
    return this.httpClient.post(API_REF + '/ComandaAPI/public/empleados/registrar', empleado)
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

  modificarEmpleado(id: number, empleado: EmpleadoModel) {
    return this.httpClient.put(API_REF + `/ComandaAPI/public/empleados/modificar/${id}`, empleado)
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
    return this.httpClient.delete(API_REF + `/ComandaAPI/public/empleados/eliminar/${id}`)
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
