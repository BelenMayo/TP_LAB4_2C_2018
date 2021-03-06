import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EncuestaModel } from '../models/encuesta.model';
import { API_REF } from 'src/globales/variables_globales';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {

  constructor(private httpClient: HttpClient) { }

  traerEncuesta(id: number) {
    return this.httpClient.get(API_REF + `/ComandaAPI/public/encuestas/traer/${id}`)
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

  guardarEncuesta(encuesta: EncuestaModel) {
    return this.httpClient.post(API_REF + '/ComandaAPI/public/encuestas/registrar', encuesta)
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
