import { Component, OnInit, TemplateRef } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-empleado-listado',
  templateUrl: './empleado-listado.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadoListadoComponent implements OnInit {
  
  empleados: string[];
  pageActual: number = 1;
  modalRef: BsModalRef;

  constructor(public empleadosService: EmpleadosService, private httpClient: HttpClient, private modalService: BsModalService) { 
    this.traerEmpleados();
  }

  ngOnInit() {
  }

  // Trae todos los clientes
  traerEmpleados() {
    this.empleadosService.traerEmpleados()
      .subscribe(resp => {
        this.empleados = resp;
        console.log(this.empleados);
      },
        error => {
          text: 'Error al traer empleados';
        });
  }

  // Elimina empleado
  eliminarEmpleado(id: number) {
    this.empleadosService.eliminarEmpleado(id)
      .subscribe(resp => {
        console.log("Se elimino el empleado");
      },
        error => {
          text: 'Error al eliminar cliente';
        });
  }

  // Abre Modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
