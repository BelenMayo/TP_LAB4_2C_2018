import { Component, OnInit, TemplateRef } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MesasService } from '../../services/mesas.service';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


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
  pageActual: number = 1;
  modalRef: BsModalRef;

  constructor(public menuService: MenuService, public mesasService: MesasService,private httpClient: HttpClient, private modalService: BsModalService) { 
    this.traerTragos();
    this.traerCervezas();
    this.traerCocina();
    this.traerCandyBar();

    this.traerMesas()
  }

  ngOnInit() {
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
