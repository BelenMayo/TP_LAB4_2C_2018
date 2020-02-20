import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MesasService } from '../../services/mesas.service';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Params } from '@angular/router';
import { MesaModel } from '../../models/mesa.model';
import { Router } from '@angular/router'


@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})

export class MesasComponent implements OnInit {

  // Variables
  mesas: string[];
  modalRef: BsModalRef;
  mesa: MesaModel;

  constructor(public mesasService: MesasService, private httpClient: HttpClient, private modalService: BsModalService,
    private formBuilder: FormBuilder, private router: Router, private rutaActiva: ActivatedRoute) { }

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

  // Cambiar estado de las mesas
  modificarEstadoMesa(id_mesa, nro_mesa, nombre, codigo_mesa, id_estado) {

    this.mesa = new MesaModel();

    console.log(id_mesa);

    this.mesa.id_mesa = id_mesa;
    this.mesa.nro_mesa = nro_mesa;
    this.mesa.nombre = nombre;
    this.mesa.codigo_mesa = codigo_mesa;
    this.mesa.id_estado_mesa = id_estado;

    console.log(this.mesa);

    this.mesasService.modificarMesa(id_mesa, this.mesa)
      .subscribe(resp => {
        this.mesas = resp;
        console.log(this.mesas);
      },
        error => {
          text: 'Error al modificar mesa';
        });

    this.modalRef.hide()
    this.router.navigateByUrl('/home');
  }

  // Abre Modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
