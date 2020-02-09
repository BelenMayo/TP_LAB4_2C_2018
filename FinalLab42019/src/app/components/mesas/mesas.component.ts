import { Component, OnInit, TemplateRef } from '@angular/core';
import { MesasService } from '../../services/mesas.service';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})

export class MesasComponent implements OnInit {

  // Variables
  mesas: string[];
  modalRef: BsModalRef;

  constructor(public mesasService: MesasService, private httpClient: HttpClient, private modalService: BsModalService) { }

  ngOnInit() {
    this.traerMesas();
  }

    // Trae todas las mesas
    traerMesas() {
      this.mesasService.traerMesasConEstado()
        .subscribe(resp => {
          this.mesas = resp;
          console.log(this.mesas);
        },
          error => {
            text: 'Error al traer clientes';
          });
    }

  // Abre Modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
