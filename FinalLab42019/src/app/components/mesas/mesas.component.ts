import { Component, OnInit } from '@angular/core';
import { MesasService } from '../../services/mesas.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})

export class MesasComponent implements OnInit {

  // Variables
  mesas: string[];

  constructor(public mesasService: MesasService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.traerMesas();
  }

    // Trae todas las mesas
    traerMesas() {
      this.mesasService.traerMesas()
        .subscribe(resp => {
          this.mesas = resp;
          console.log(this.mesas);
        },
          error => {
            text: 'Error al traer clientes';
          });
    }

}
