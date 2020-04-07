import { Component, OnInit, TemplateRef } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MesasService } from '../../services/mesas.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ClientesService } from '../../services/clientes.service';
import { PedidosService } from '../../services/pedidos.service';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { PedidoModel } from '../../models/pedido.model';
import { PanelModel } from '../../models/panel.model';
import { SeleccionMenu } from 'src/app/models/seleccion_menu';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  // Variables
  menu: SeleccionMenu[];
  mesas: string[];

  formMenu: FormGroup;
  isChecked: boolean;

  clientes: string[];
  paneles: PanelModel[] = [];
  pedido: PedidoModel;

  pageActual: number = 1;
  modalRef: BsModalRef;
  panel: PanelModel;

  detallePedidoString: String[];
  valor: string;

  total: number = 0;
  mesa: string;
  cliente: string;

  mesaSeleccionada: string = "";
  clienteSeleccionado: string = "";
  cantidadMenu: string = "";

  elementosSeleccionados: SeleccionMenu[] = [];

  constructor(public menuService: MenuService, public mesasService: MesasService, public clientesService: ClientesService,
    private httpClient: HttpClient,
    private modalService: BsModalService, private router: Router, private formBuilder: FormBuilder
    , public PedidosService: PedidosService) {
    this.traerMenu();
    this.traerMesas();
    this.traerClientes();
  }

  ngOnInit() {
  }

  cargarDetalleComanda() {
    //debugger;
    this.total = 0;

    this.menu.forEach(element => {
      if (element.seleccionado) {
        this.elementosSeleccionados.push(SeleccionMenu.guardarSeleccionMenu(element));
        this.total += +element.precio;
      }
    });

    console.log(this.elementosSeleccionados);

    this.modalRef.hide();
  }

  eliminarDetallePedido(id) {

    this.menu.forEach(element => {
      if (element.id_menu = id) {
        this.elementosSeleccionados.splice(1);
        this.total -= -element.precio;
      }
    });

    this.router.navigateByUrl('/menu');
  }

  enviarComanda() {
    this.pedido = new PedidoModel();
    this.panel = new PanelModel();

    this.pedido= PedidoModel.guardarPedido(this.cliente, this.mesa, this.total);

    this.elementosSeleccionados.forEach(element => {
      this.paneles.push(PanelModel.guardarPanel(element));
    });

    console.log(this.paneles);

    this.PedidosService.guardarPedido(this.pedido)
      .subscribe(resp => {
        text: 'Pedido guardado';
      },
        error => {
          text: 'Error al guardar pedido';
        });

    this.PedidosService.guardarPanel(this.paneles)
      .subscribe(resp => {
        console.log(this.clientes);
      },
        error => {
          text: 'Panel guardado';
        });

        Swal.fire({
          title: 'Comanda cargada exitosamente!',
          text: 'Muchas gracias',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })

    this.router.navigateByUrl('home');
  }

  // Trae menu
  traerMenu() {
    this.menu = [];
    this.menuService.traerMenuCompleto()
      .subscribe(resp => {
        for (let index = 0; index < resp.length; index++) {
          this.menu.push(SeleccionMenu.guardarSeleccionMenu(resp[index]));

        }
        console.log('Menu:' + this.menu);
      },
        error => {
          text: 'Error al traer menu';
        });
  }

  // Trae mesas
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

  //Trae clientes
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

}
