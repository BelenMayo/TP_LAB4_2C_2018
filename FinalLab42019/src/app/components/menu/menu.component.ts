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
  menus: string[];

  constructor(public menuService: MenuService, private httpClient: HttpClient) { 
    this.traerMenus();
  }

  ngOnInit() {
  }

  // Trae todos los menu
  traerMenus() {
    this.menuService.traerMenus()
      .subscribe(resp => {
        this.menus = resp;
        console.log(this.menus);
      },
        error => {
          text: 'Error al traer menus';
        });
  }

}
