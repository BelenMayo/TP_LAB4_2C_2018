import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EmpleadoModel } from '../../models/empleado.model';
import { EmpleadosService } from '../../services/empleados.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-empleado-modificar',
  templateUrl: './empleado-modificar.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadoModificarComponent implements OnInit {
  formEmpleado: FormGroup;
  submitted = false;

  // Variables
  empleados: string[];
  empleado: EmpleadoModel;
  id: number;

  constructor(private formBuilder: FormBuilder, public empleadosService: EmpleadosService, private httpClient: HttpClient, private rutaActiva: ActivatedRoute) {
    this.rutaActiva.params.subscribe(params=>
      {
        this.traerEmpleado(params.id);
      });
  }

  ngOnInit() {
  }

  // Trae un empleado
  traerEmpleado(id) {
    this.id= id;
    this.empleadosService.traerEmpleado(id)
      .subscribe(resp => {
        this.formEmpleado = this.formBuilder.group({
          nombre: [resp[0].nombre, Validators.required],
          apellido: [resp[0].apellido, Validators.required],
          telefono: [resp[0].telefono, Validators.required],
          mail: [resp[0].mail, Validators.required],
          foto: [resp[0].foto, Validators.required],
          usuario: [resp[0].usuario, Validators.required,],
          password: [resp[0].password, Validators.required]
        })
      },
        error => {
          text: 'Error al traer empleado';
        });
  }

  // Modifica un empleado
  modificarEmpleado() {
    this.submitted = true;

    this.empleado = new EmpleadoModel().modificarEmpleado(this.formEmpleado.controls);
    
    this.empleadosService.modificarEmpleado(this.id, this.empleado)
      .subscribe(resp => {
        this.empleados = resp;
        console.log(this.empleados);
      },
        error => {  
          text: 'Error al modificar empleado';
        });
  }

}
