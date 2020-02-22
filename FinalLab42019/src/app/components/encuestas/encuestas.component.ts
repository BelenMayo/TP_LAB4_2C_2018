import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EncuestaModel } from '../../models/encuesta.model';
import { EncuestasService } from '../../services/encuestas.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {

  formEncuesta: FormGroup;

  // Variables
  encuestas: string[];
  encuesta: EncuestaModel;
  id: number;

  modalRef: BsModalRef;

  constructor(private formBuilder: FormBuilder, public encuestasService: EncuestasService, private httpClient: HttpClient
    , private router: Router, private modalService: BsModalService) { }

  ngOnInit() {
    this.formEncuesta = this.formBuilder.group({
      puntaje_mesa: ['', Validators.required],
      puntaje_restaurante: ['', Validators.required],
      puntaje_mozo: ['', Validators.required],
      puntaje_cocinero: ['', Validators.required],
      comentarios: ['', Validators.required]
    })
  }

  // Guarda una encuesta
  guardarEncuesta(modal) {

    this.encuesta = new EncuestaModel().guardarEncuesta(this.formEncuesta.controls);

    this.encuestasService.guardarEncuesta(this.encuesta)
      .subscribe(resp => {
        this.encuestas = resp;
        console.log(this.encuestas);
      },
        error => {
          text: 'Error al guardar encuesta';
        });

    // this.openModal(modal);

    Swal.fire({
      title: 'Encuesta cargada exitosamente!',
      text: 'Muchas gracias',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })

    this.router.navigateByUrl('/home');
  }

  // Abre Modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
