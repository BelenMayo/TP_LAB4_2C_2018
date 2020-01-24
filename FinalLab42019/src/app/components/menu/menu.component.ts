import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { HttpClient } from '@angular/common/http';

import * as $ from "jquery";

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

  constructor(public menuService: MenuService, private httpClient: HttpClient) { 
    this.traerTragos();
    this.traerCervezas();
    this.traerCocina();
    this.traerCandyBar();
  }

  ngOnInit() {
  }

  // Trae todos los menu
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

}
