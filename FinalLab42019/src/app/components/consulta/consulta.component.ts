import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SectorPedidoService } from '../../services/sector-pedido.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  codigoPedido: string = "";
  estados: string[];

  constructor(private router: Router, private formBuilder: FormBuilder, public sectorPedidoService: SectorPedidoService) { 
    this.codigoPedido= "";
  }

  ngOnInit() {
  }

  // Trae todos los estados del pedido
  public consultarEstadoPedido() {

    this.sectorPedidoService.consultarEstadoPedido(this.codigoPedido)
      .subscribe(resp => {
        this.estados = resp;
        console.log(this.estados);
      },
        error => {
          text: 'Error al traer estados';
        });
  }

}
