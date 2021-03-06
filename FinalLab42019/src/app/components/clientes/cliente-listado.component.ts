import { Component, OnInit, TemplateRef } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { ListadosService } from '../../services/listados.service';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ExcelService } from '../../services/excel.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

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
    , private excelService: ExcelService, private router: Router, public listadosService: ListadosService) {
    this.traerClientes();
    this.listadosService.refrescarClientes();
  }

  ngOnInit() {
    // this.traerClientes();
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
  eliminarCliente(item: any) {
    this.clientesService.eliminarCliente(item.id_cliente)
      .subscribe(resp => {
        console.log("Se elimino el cliente");
      },
        error => {
          text: 'Error al eliminar cliente';
        });

    this.modalRef.hide();
    console.log(this.listadosService.clientes);
    var i = this.listadosService.clientes.indexOf( item );
    this.listadosService.clientes.splice(i, 1);
    
    Swal.fire({
      title: 'Cliente eliminado exitosamente!',
      text: 'Muchas gracias',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })

    this.router.navigateByUrl('/cliente/listadoCliente');
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
