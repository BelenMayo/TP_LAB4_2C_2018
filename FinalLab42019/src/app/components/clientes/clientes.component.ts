import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ClienteModel } from '../../models/cliente.model';
import { ClientesService } from '../../services/clientes/clientes.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  formCliente: FormGroup;
  submitted = false;

  // Variables
  clientes: string[];
  cliente: ClienteModel;

  constructor(private formBuilder: FormBuilder, public clientesService: ClientesService, private httpClient: HttpClient) {
    this.traerClientes();
  }

  ngOnInit() {
    this.formCliente = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      mail: ['', Validators.required],
      usuario: ['', Validators.required,],
      password: ['', Validators.required]
    })
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

  // Guarda un cliente
  guardarCliente() {
    this.submitted = true;

    if (!this.formCliente.invalid) {
      return;
    }

    this.cliente = this.formCliente;

    this.clientesService.guardarCliente(this.cliente)
      .subscribe(resp => {
        this.clientes = resp;
        console.log(this.clientes);
      },
        error => {  
          text: 'Error al guardar cliente';
        });
  }

}