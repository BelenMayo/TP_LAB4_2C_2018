import { Component, OnInit, TemplateRef } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';


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

  constructor(public clientesService: ClientesService, private httpClient: HttpClient, private modalService: BsModalService) {
    this.traerClientes();
  }

  ngOnInit() {
  }

  // Trae todos los clientes
  traerClientes() {
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
    html2canvas(document.getElementById('tablaClientes'), {
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

}
