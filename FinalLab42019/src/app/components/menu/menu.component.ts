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
import { DetallePedidoModel } from '../../models/detalle_pedido.model';
import { PanelModel } from '../../models/panel.model';
import { stringify } from 'querystring';


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

  formMenu: FormGroup;
  isChecked: boolean;

  clientes: string[];

  detallePedido: string[];

  pageActual: number = 1;
  modalRef: BsModalRef;
  pedido: PedidoModel;
  detallePedidoModel: DetallePedidoModel;
  panel: PanelModel;

  detallePedidoString: String[];
  valor: string;

  mesaSeleccionada: string = "";
  clienteSeleccionado: string = "";
  cantidadTrago: string = "";
  cantidadCerveza: string = "";
  cantidadPlato: string = "";
  cantidadCandy: string = "";

  //formPedido: FormGroup;

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
    this.formMenu = this.formBuilder.group({
      mesa: ['', Validators.required],
      cliente: ['', Validators.required],
      cantidad: ['', Validators.required]
    })
  }

  cargarComanda(){
    
  }

  ver(menu) {
    console.log("Mesa: " + this.mesaSeleccionada);
    console.log("Cliente: " + this.clienteSeleccionado);

    console.log("Cantidad Trago: " + this.cantidadTrago + " - Menu: " + menu);
  }

  guardarDetallePerdido(menu, categoria, seccion, precio) {

    this.detallePedidoModel = new DetallePedidoModel();

    this.detallePedidoModel.id_menu= this.cantidadTrago;
    this.detallePedidoModel.id_categoria= categoria;
    this.detallePedidoModel.id_seccion= seccion;
    this.detallePedidoModel.precio= precio;
    this.detallePedidoModel.subtotal= precio;

    this.modalRef.hide();
  }

  agregarDetalle() {

    this.valor = "1"
    // this.detallePedidoString= new String()[];

    this.detallePedidoString.push(this.valor);

    console.log(this.detallePedidoString);
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

    //this.pedido = new PedidoModel().guardarPedido(this.formPedido.controls);

    this.pedido = new PedidoModel();

    this.pedido.id_cliente = '21';
    this.pedido.id_mesa = '2';
    this.pedido.codigo_pedido = (Math.floor(Math.random() * 99999) + 10000).toString();
    this.pedido.codigo_mesa = (Math.floor(Math.random() * 99999) + 10000).toString();
    this.pedido.id_estado_pedido = '1';
    this.pedido.hora_pedido = new Date();
    this.pedido.tiempo_espera = new Date();
    this.pedido.total = '450';

    this.detallePedidoModel = new DetallePedidoModel();

    this.detallePedidoModel.id_pedido = '9';
    this.detallePedidoModel.id_menu = '3';
    this.detallePedidoModel.id_categoria = '2';
    this.detallePedidoModel.id_seccion = '1';
    this.detallePedidoModel.precio = '290';
    this.detallePedidoModel.cantidad = '2';
    this.detallePedidoModel.subtotal = '580';

    this.panel = new PanelModel();

    this.panel.id_pedido = '3';
    this.panel.id_empleado = '8';
    this.panel.id_menu = '4';
    this.panel.id_categoria = '1';
    this.panel.id_seccion = '3';
    this.panel.hora_inicio = new Date();
    this.panel.tiempo_finalizacion = new Date();
    this.panel.id_estado_pedido = '10';

    console.log(this.pedido);

    this.PedidosService.guardarPedido(this.pedido)
      .subscribe(resp => {
        this.clientes = resp;
        console.log(this.clientes);

        this.PedidosService.guardarDetallePedido(this.detallePedidoModel);
        this.PedidosService.guardarPanel(this.panel);
      },
        error => {
          text: 'Error al guardar pedido';
        });

    this.openModal(modal);
    this.router.navigateByUrl('home');
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
