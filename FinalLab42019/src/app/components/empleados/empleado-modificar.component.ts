import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EmpleadoModel } from '../../models/empleado.model';
import { EmpleadosService } from '../../services/empleados.service';
import { ListadosService } from '../../services/listados.service';
import { NavbarService } from '../../services/navbar.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2'

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

  modalRef: BsModalRef;

  pagina: string;

  constructor(private formBuilder: FormBuilder, public empleadosService: EmpleadosService, private httpClient: HttpClient,
    private rutaActiva: ActivatedRoute, private router: Router, private modalService: BsModalService, 
    private navbarService: NavbarService, public listadosService: ListadosService) {
    this.rutaActiva.params.subscribe(params => {
      this.traerEmpleado(params.id);
    });
  }

  ngOnInit() {
  }

  // Trae un empleado
  traerEmpleado(id) {
    this.id = id;
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
  modificarEmpleado(modal) {
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

    Swal.fire({
      title: 'Empleado modificado exitosamente!',
      text: 'Muchas gracias',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })

    this.pagina= "empleados"; 

    this.listadosService.refrescarEmpleados();
    this.router.navigateByUrl('/empleado/listadoEmpleado');
  }

}
