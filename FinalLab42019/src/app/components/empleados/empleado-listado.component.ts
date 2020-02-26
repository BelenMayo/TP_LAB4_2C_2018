import { Component, OnInit, TemplateRef } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { ListadosService } from '../../services/listados.service';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ExcelService } from '../../services/excel.service';
import { Router } from '@angular/router';


import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

//Excel
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-empleado-listado',
  templateUrl: './empleado-listado.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadoListadoComponent implements OnInit {

  empleados: string[];
  pageActual: number = 1;
  modalRef: BsModalRef;

  constructor(public empleadosService: EmpleadosService, private httpClient: HttpClient, private modalService: BsModalService
    , private excelService: ExcelService, private router: Router, public listadosService: ListadosService) {
    this.traerEmpleados();
    this.listadosService.refrescarEmpleados();
  }

  ngOnInit() {
  }

  // Trae todos los empleados
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
          text: 'Error al eliminar empleado';
        });
    this.modalRef.hide()

    this.listadosService.refrescarEmpleados();
    this.router.navigateByUrl('/empleado/listadoEmpleado');
  }

  // Abre Modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  // PDF
  generarPDF() {
    html2canvas(document.getElementById('mydatatable'), {
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

  // Excel
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.empleados, 'Empleados');
  }

}
