import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ClienteModel } from '../../models/cliente.model';
import { ClientesService } from '../../services/clientes.service';
import { HttpClient } from '@angular/common/http';


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

  // Guarda un cliente
  guardarCliente() {
    this.submitted = true;

    // if (!this.formCliente.invalid) {
    //   return;
    // }

    this.cliente = new ClienteModel().guardarCliente(this.formCliente.controls);
    
    this.clientesService.guardarCliente(this.id, this.cliente)
      .subscribe(resp => {
        this.clientes = resp;
        console.log(this.clientes);
      },
        error => {  
          text: 'Error al guardar cliente';
        });
  }
}
