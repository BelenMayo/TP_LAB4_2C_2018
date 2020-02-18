import { Component } from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent {

  // Variables
  valorEstadistica1: string;
  valorEstadistica2: string;

  // Pedidos
  pedidoMasVendido: string = "Palmitos";
  pedidoMenosVendido: string = "Rabas";
  pedidosQueNoSeEntregaronATiempo: string = "9";
  pedidosCancelados: string = "5";

  // Mesas
  mesaMasUsada: string = "Mesa 9";
  mesaMenosUsada: string = "Mesa 3";
  mesaMayorImporte: string = "Mesa 3";
  mesaMenorImporte: string = "Mesa 9";
  mesaMayorFacturacion: string = "Mesa 6";
  mesaMenorFacturacion: string = "Mesa 5";
  mesaMejoresComentarios: string = "Mesa 4";
  mesaPeoresComentarios: string = "Mesa 7";

  constructor() { }

  ngOnInit() {
    this.traerValor("");
  }

  traerValor(valorPregunta: string) {

    switch (valorPregunta) {

      case "1":
        this.valorEstadistica2 = "";
        this.valorEstadistica1 = this.pedidoMasVendido;
        break;

      case "2":
      this.valorEstadistica2 = "";
        this.valorEstadistica1 = this.pedidoMenosVendido;
        break;

      case "3":
        this.valorEstadistica2 = "";
        this.valorEstadistica1 = this.pedidosQueNoSeEntregaronATiempo;
        break;

      case "4":
        this.valorEstadistica2 = "";
        this.valorEstadistica1 = this.pedidosCancelados;
        break;

      case "5":
        this.valorEstadistica1 = "";
        this.valorEstadistica2 = this.mesaMasUsada;
        break;

      case "6":
        this.valorEstadistica1 = "";
        this.valorEstadistica2 = this.mesaMenosUsada;
        break;

      case "7":
        this.valorEstadistica1 = "";
        this.valorEstadistica2 = this.mesaMayorImporte;
        break;

      case "8":
        this.valorEstadistica1 = "";
        this.valorEstadistica2 = this.mesaMenorImporte;
        break;

      case "9":
        this.valorEstadistica1 = "";
        this.valorEstadistica2 = this.mesaMayorFacturacion;
        break;

      case "10":
        this.valorEstadistica1 = "";
        this.valorEstadistica2 = this.mesaMenorFacturacion;
        break;

      case "11":
        this.valorEstadistica1 = "";
        this.valorEstadistica2 = this.mesaMejoresComentarios;
        break;

      case "12":
        this.valorEstadistica1 = "";
        this.valorEstadistica2 = this.mesaPeoresComentarios;
        break;

      default:
        this.valorEstadistica1 = "";
        this.valorEstadistica2 = "";
    }
  }


}
