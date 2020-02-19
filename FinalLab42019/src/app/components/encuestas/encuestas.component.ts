import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EncuestaModel } from '../../models/encuesta.model';
import { EncuestasService } from '../../services/encuestas.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {

  formEncuesta: FormGroup;
  submitted = false;

  // Variables
  encuestas: string[];
  encuesta: EncuestaModel;
  id: number;

  constructor(private formBuilder: FormBuilder, public encuestasService: EncuestasService, private httpClient: HttpClient
    , private router: Router) { }

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
  guardarEncuesta() {
    this.submitted = true;

    this.encuesta = new EncuestaModel().guardarEncuesta(this.formEncuesta.controls);

    this.encuestasService.guardarEncuesta(this.encuesta)
      .subscribe(resp => {
        this.encuestas = resp;
        console.log(this.encuestas);
      },
        error => {
          text: 'Error al guardar encuesta';
        });

    this.router.navigateByUrl('/home');
  }

}
