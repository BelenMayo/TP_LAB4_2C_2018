import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ClienteModel } from '../../models/cliente.model';
import { ClientesService } from '../../services/clientes.service';
import { ListadosService } from '../../services/listados.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-cliente-alta',
  templateUrl: './cliente-alta.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClienteAltaComponent implements OnInit {
  formCliente: FormGroup;
  submitted = false;

  // Variables
  clientes: string[];
  cliente: ClienteModel;
  id: number;

  modalRef: BsModalRef;

  constructor(private formBuilder: FormBuilder, public clientesService: ClientesService, private httpClient: HttpClient
    , private router: Router, private modalService: BsModalService, public listadosService: ListadosService) {
  }

  ngOnInit() {
    this.formCliente = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      foto: ['', Validators.required],
      usuario: ['', Validators.required,],
      password: ['', Validators.required]
    })
  }

  // Guarda un cliente
  guardarCliente() {
    this.submitted = true;

    // if (!this.formCliente.invalid) {
    //   return;
    // }

    this.cliente = new ClienteModel().guardarCliente(this.formCliente.controls);

    console.log(this.cliente);

    this.clientesService.guardarCliente(this.cliente)
      .subscribe(resp => {
        this.clientes = resp;
        console.log(this.clientes);
      },
        error => {
          text: 'Error al guardar cliente';
        });

    Swal.fire({
      title: 'Cliente cargado exitosamente!',
      text: 'Muchas gracias',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })

    this.listadosService.refrescarClientes();
    this.router.navigateByUrl('/cliente/listadoCliente');
  }

  // Abre Modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);

  }
}
