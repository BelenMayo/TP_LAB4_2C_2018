import { Component, OnInit, TemplateRef } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

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

  // PDF
  generarPDF() {
    html2canvas(document.getElementById('tablaEmpleados'), {
      // Opciones
      allowTaint: true,
      useCORS: false,
      // Calidad del PDF
      scale: 1
    }).then(function (canvas) {
      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      doc.addImage(img, 'PNG', 7, 20, 195, 105);
      doc.save('Listado de Empleados.pdf');
    });
  }

}
