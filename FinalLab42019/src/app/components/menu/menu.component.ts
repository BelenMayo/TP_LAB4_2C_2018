import { Component, OnInit, TemplateRef } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MesasService } from '../../services/mesas.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ClientesService } from '../../services/clientes.service';
import { DetallePedidoService } from '../../services/detalle-pedido.service';
import { PedidosService } from '../../services/pedidos.service';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { PedidoModel } from '../../models/pedido.model';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  // Variables
  tragos: string[];
  cervezas: string[];
  cocina: string[];
  candy: string[];
  mesas: string[];  
  clientes: string[];
  detallePedido: string[];
  pageActual: number = 1;
  modalRef: BsModalRef;
  pedido: PedidoModel;

  formPedido: FormGroup;

  constructor(public menuService: MenuService, public mesasService: MesasService, public clientesService: ClientesService,
               public detallePedidoService: DetallePedidoService, private httpClient: HttpClient, 
               private modalService: BsModalService, private router: Router, private formBuilder: FormBuilder
               , public PedidosService: PedidosService) { 
    this.traerTragos();
    this.traerCervezas();
    this.traerCocina();
    this.traerCandyBar();
    this.traerMesas();
    this.traerClientes();
    this.traerDetallePedido();
  }

  ngOnInit() {
      this.formPedido = this.formBuilder.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        telefono: ['', Validators.required],
        mail: ['', Validators.required],
        foto: ['', Validators.required],
        usuario: ['', Validators.required,],
        password: ['', Validators.required]
      })
  }

  // Trae todos los tragos
  traerTragos() {
    this.menuService.traerMenuPorCategoria(1)
      .subscribe(resp => {
        this.tragos = resp;
        console.log(this.tragos);
      },
        error => {
          text: 'Error al traer tragos';
        });
  }

  // Trae todas las cervezas
  traerCervezas() {
    this.menuService.traerMenuPorCategoria(2)
      .subscribe(resp => {
        this.cervezas = resp;
        console.log(this.cervezas);
      },
        error => {
          text: 'Error al traer cervezas';
        });
  }

  // Trae toda la cocina
  traerCocina() {
    this.menuService.traerMenuPorCategoria(3)
      .subscribe(resp => {
        this.cocina = resp;
        console.log(this.cocina);
      },
        error => {
          text: 'Error al traer cocina';
        });
  }

  // Trae todo el candy bar
  traerCandyBar() {
    this.menuService.traerMenuPorCategoria(4)
      .subscribe(resp => {
        this.candy = resp;
        console.log(this.candy);
      },
        error => {
          text: 'Error al traer candy';
        });
  }

  traerMesas() {
    this.mesasService.traerMesas()
      .subscribe(resp => {
        this.mesas = resp;
        console.log(this.mesas);
      },
        error => {
          text: 'Error al traer mesas';
        });
  }

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

  traerDetallePedido() {
    this.menuService.traerDetallePedido()
      .subscribe(resp => {
        this.detallePedido = resp;
        console.log(this.detallePedido);
      },
        error => {
          text: 'Error al traer detalle del pedido';
        });
  }

  eliminarDetallePedido(id) {
    this.menuService.eliminarDetallePedido(id)
      .subscribe(resp => {
        console.log("Se elimino el cliente");
      },
        error => {
          text: 'Error al eliminar cliente';
        });

    // this.modalRef.hide()
    this.router.navigateByUrl('/menu'); 
  }

  enviarComanda(modal) {

    this.pedido = new PedidoModel().guardarPedido(this.formPedido.controls);

    console.log(this.pedido);

    this.PedidosService.guardarPedido(this.pedido)
      .subscribe(resp => {
        this.clientes = resp;
        console.log(this.clientes);
      },
        error => {
          text: 'Error al guardar pedido';
        });

    this.openModal(modal);
    this.router.navigateByUrl('pedido/listadoPedido');
  }



  // Abre Modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModal2(template2: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template2);
  }

  openModal3(template3: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template3);
  }

  openModal4(template4: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template4);
  }
  
}
