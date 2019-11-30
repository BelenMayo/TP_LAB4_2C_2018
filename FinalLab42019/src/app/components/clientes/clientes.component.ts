import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ClientesService } from '../../services/clientes/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  formCliente: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public clientesService: ClientesService) {
  
  }

  ngOnInit() {  
    this.formCliente = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      // mesa: ['', Validators.required],
      // sexo: ['', Validators.required],
      dni: ['', Validators.required],   
      fechaNac: ['', Validators.required],
      otro: ['', Validators.required],      
      //pedido: ['', Validators.required]
    })
  } 

  get f() { return this.formCliente.controls; }

  guardarCliente(){
        this.submitted = true;

        if (this.formCliente.invalid) {
            return;
        }

        alert('Formulario Ok!!\n\n' + JSON.stringify(this.formCliente.value))
  }


 

}
