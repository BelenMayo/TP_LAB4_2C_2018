import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-empleado-detalle',
  templateUrl: './empleado-detalle.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadoDetalleComponent implements OnInit {

  // Variables
  empleado: string[];
  id: string;

  constructor(public empleadosService: EmpleadosService, private httpClient: HttpClient, private rutaActiva: ActivatedRoute) {
    this.rutaActiva.params.subscribe(params=>
      {
        this.traerEmpleado(params.id);
      });
   }

  ngOnInit() {
  }
  
  // Trae un empleado
  traerEmpleado(id) {
    this.empleadosService.traerEmpleado(id)
      .subscribe(resp => {
        this.empleado = resp;
        console.log(this.empleado);
      },
        error => {
          text: 'Error al traer cliente';
        });
  }


}
