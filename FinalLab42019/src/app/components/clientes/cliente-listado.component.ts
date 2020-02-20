import { Component, OnInit, TemplateRef } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ExcelService } from '../../services/excel.service';
import { Router } from '@angular/router';

// PDF
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

//Excel
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-cliente-listado',
  templateUrl: './cliente-listado.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClienteListadoComponent implements OnInit {

  // Variables
  clientes: string[];
  pageActual: number = 1;
  modalRef: BsModalRef;

  constructor(public clientesService: ClientesService, private httpClient: HttpClient, private modalService: BsModalService
    , private excelService: ExcelService, private router: Router) {
    this.traerClientes();
  }

  ngOnInit() {
  }

  // Trae todos los clientes
  public traerClientes() {
    this.clientesService.traerClientes()
      .subscribe(resp => {
        this.clientes = resp;
        console.log(this.clientes);
      },
        error => {
          text: 'Error al traer clientes';
        });
  }

  // Elimina cliente
  eliminarCliente(id: number) {
    this.clientesService.eliminarCliente(id)
      .subscribe(resp => {
        console.log("Se elimino el cliente");
        this.traerClientes();
      },
        error => {
          text: 'Error al eliminar cliente';
        });

    this.modalRef.hide()
    this.router.navigateByUrl('/home');   
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
      doc.save('Listado de Clientes.pdf');
    });
  }

  // Excel
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.clientes, 'Clientes');
  }

}
