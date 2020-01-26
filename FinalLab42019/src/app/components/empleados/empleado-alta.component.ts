import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EmpleadoModel } from '../../models/empleado.model';
import { EmpleadosService } from '../../services/empleados.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-empleado-alta',
  templateUrl: './empleado-alta.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadoAltaComponent implements OnInit {

  formEmpleado: FormGroup;
  submitted = false;

  // Variables
  empleados: string[];
  empleado: EmpleadoModel;
  id: number;

  constructor(private formBuilder: FormBuilder, public empleadosService: EmpleadosService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.formEmpleado = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      mail: ['', Validators.required],
      foto: ['', Validators.required],
      usuario: ['', Validators.required,],
      password: ['', Validators.required]
    })
  }

  // Guarda un empleado
  guardarEmpleado() {
    this.submitted = true;

    // if (!this.formCliente.invalid) {
    //   return;
    // }

    this.empleado = new EmpleadoModel().guardarEmpleado(this.formEmpleado.controls);
    
    this.empleadosService.guardarEmpleado(this.empleado)
      .subscribe(resp => {
        this.empleados = resp;
        console.log(this.empleados);
      },
        error => {  
          text: 'Error al guardar empleado';
        });
  }
}
