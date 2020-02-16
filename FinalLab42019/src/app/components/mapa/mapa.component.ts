import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
  }

  texto : string = 'La Comanda';
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;
  
}
