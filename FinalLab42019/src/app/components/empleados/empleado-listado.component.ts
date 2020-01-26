import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-empleado-listado',
  templateUrl: './empleado-listado.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadoListadoComponent implements OnInit {
  // Variables
  empleados: string[];
  pageActual: number = 1;

  constructor(public empleadosService: EmpleadosService, private httpClient: HttpClient) { 
    this.traerEmpleados();
  }

  ngOnInit() {
    // $(document).ready(function () {
    //   $('#tablaClientes').DataTable();
    //   $('.dataTables_length').addClass('bs-select');
    // });
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

}
