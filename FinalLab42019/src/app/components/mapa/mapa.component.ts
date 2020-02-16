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
  lat: number = -34.716511;
  lng: number = -58.291985;
  zoom: number = 15;
  
}