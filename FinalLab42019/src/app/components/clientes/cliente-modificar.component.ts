import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ClienteModel } from '../../models/cliente.model';
import { ClientesService } from '../../services/clientes.service';
import { HttpClient } from '@angular/common/http';

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

  constructor(private formBuilder: FormBuilder, public clientesService: ClientesService, private httpClient: HttpClient) {
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

  // Modifica un cliente
  modificarCliente() {
    this.submitted = true;

    // if (!this.formCliente.invalid) {
    //   return;
    // }

    this.cliente = new ClienteModel().modificarCliente(this.formCliente.controls);
    
    this.clientesService.modificarCliente(this.cliente)
      .subscribe(resp => {
        this.clientes = resp;
        console.log(this.clientes);
      },
        error => {  
          text: 'Error al guardar cliente';
        });
  }

}
