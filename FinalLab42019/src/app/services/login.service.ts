import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoginModel } from '../models/login.model';
import { API_REF } from 'src/globales/variables_globales';
import { ChequeaLoginModel } from 'src/app/models/chequea_login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  traerUsuarios(id: number) {
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

  login(usuario: ChequeaLoginModel) {
    return this.httpClient.post(API_REF + '/ComandaAPI/public/login/registrar', usuario)
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

  registro(usuario: LoginModel) {
    return this.httpClient.post(API_REF + '/ComandaAPI/public/login/registrar', usuario)
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
