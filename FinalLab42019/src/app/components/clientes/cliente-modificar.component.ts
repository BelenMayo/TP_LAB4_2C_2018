import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ClienteModel } from '../../models/cliente.model';
import { ClientesService } from '../../services/clientes.service';
import { ListadosService } from '../../services/listados.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-cliente-modificar',
  templateUrl: './cliente-modificar.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClienteModificarComponent implements OnInit {
  formCliente: FormGroup;
  submitted = false;

  // Variables
  clientes: string[];
  cliente: ClienteModel;
  id: number;

  modalRef: BsModalRef;

  constructor(private formBuilder: FormBuilder, public clientesService: ClientesService, private httpClient: HttpClient
    , private rutaActiva: ActivatedRoute, private router: Router, private modalService: BsModalService
    , public listadosService: ListadosService) {
    this.rutaActiva.params.subscribe(params => {
      this.traerCliente(params.id);
    });
  }

  ngOnInit() {
  }

  // Trae un cliente
  traerCliente(id) {
    this.id = id;
    this.clientesService.traerCliente(id)
      .subscribe(resp => {
        this.formCliente = this.formBuilder.group({
          nombre: [resp[0].nombre, Validators.required],
          apellido: [resp[0].apellido, Validators.required],
          foto: [resp[0].foto, Validators.required],
          usuario: [resp[0].usuario, Validators.required,],
          password: [resp[0].password, Validators.required]
        })
      },
        error => {
          text: 'Error al traer cliente';
        });
  }

  // Modifica un cliente
  modificarCliente(modal) {
    this.submitted = true;

    this.cliente = new ClienteModel().modificarCliente(this.formCliente.controls);

    this.clientesService.modificarCliente(this.id, this.cliente)
      .subscribe(resp => {
        this.clientes = resp;
        console.log(this.clientes);
      },
        error => {
          text: 'Error al modificar cliente';
        });

    Swal.fire({
      title: 'Cliente modificado exitosamente!',
      text: 'Muchas gracias',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })

    this.listadosService.refrescarClientes();
    this.router.navigateByUrl('/cliente/listadoCliente');
  }

}
