import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ClienteModel } from '../../models/cliente.model';
import { ClientesService } from '../../services/clientes.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


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
    , private router: Router, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.formCliente = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      mail: ['', Validators.required],
      foto: ['', Validators.required],
      usuario: ['', Validators.required,],
      password: ['', Validators.required]
    })
  }

  // Guarda un cliente
  guardarCliente(modal) {
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

    this.openModal(modal);
    this.router.navigateByUrl('/home');
  }

  // Abre Modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);

  }
}
