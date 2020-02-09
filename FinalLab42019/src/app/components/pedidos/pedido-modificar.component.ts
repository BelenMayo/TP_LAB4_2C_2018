import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PedidoModel } from '../../models/pedido.model';
import { PedidosService } from '../../services/pedidos.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pedido-modificar',
  templateUrl: './pedido-modificar.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidoModificarComponent implements OnInit {

  formPedido: FormGroup;
  submitted = false;

  // Variables
  pedidos: string[];
  pedido: PedidoModel;
  id: number;

  constructor(private formBuilder: FormBuilder, public pedidosService: PedidosService, private httpClient: HttpClient
    , private rutaActiva: ActivatedRoute) {
      this.rutaActiva.params.subscribe(params=>
        {
          this.traerPedido(params.id);
        });
  }

  ngOnInit() {
  }
  
  // Trae un pedido
  traerPedido(id) {
    this.id= id;
    this.pedidosService.traerPedido(id)
      .subscribe(resp => {
        this.formPedido = this.formBuilder.group({
          cliente: [resp[0].cliente, Validators.required],
          mesa: [resp[0].mesa, Validators.required],
          codigo_mesa: [resp[0].codigo_mesa, Validators.required],
          foto_mesa: [resp[0].foto_mesa, Validators.required],
          estado_pedido: [resp[0].estado_pedido, Validators.required],
          tiempo_espera: [resp[0].tiempo_espera, Validators.required,],
          importe: [resp[0].importe, Validators.required]
        })
      },
        error => {
          text: 'Error al traer pedido';
        });
  }

  // Modifica un pedido
  modificarPedido() {
    this.submitted = true;

    this.pedido = new PedidoModel().modificarPedido(this.formPedido.controls);
    
    this.pedidosService.modificarPedido(this.id, this.pedido)
      .subscribe(resp => {
        this.pedidos = resp;
        console.log(this.pedidos);
      },
        error => {  
          text: 'Error al modificar pedido';
        });
  }


}
