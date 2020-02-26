import { Injectable } from '@angular/core';
import { EmpleadosService } from '../services/empleados.service';
import { ClientesService } from '../services/clientes.service';
import { PedidosService } from '../services/pedidos.service';
import { SectorPedidoService } from '../services/sector-pedido.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Injectable({
  providedIn: 'root'
})
export class ListadosService {

  empleados: string[];
  clientes: string[];
  pedidos: string[];

  constructor(public empleadosService: EmpleadosService, public clientesService: ClientesService
    , public pedidosService: PedidosService, public sectorPedidoService: SectorPedidoService, public navbarService: NavbarService) { 

  }

  refrescarEmpleados(){
  // Trae todos los empleados
    this.empleadosService.traerEmpleados()
      .subscribe(resp => {
        this.empleados = resp;
        console.log(this.empleados);
      },
        error => {
          text: 'Error al traer empleados';
        });
  }

  refrescarClientes(){
  // Trae todos los clientes
    this.clientesService.traerClientes()
      .subscribe(resp => {
        this.clientes = resp;
        console.log(this.clientes);
      },
        error => {
          text: 'Error al traer clientes';
        });
  }

  refrescarPedidos(){
    // Trae todos los pedidos
    this.pedidosService.traerPedidosDetallePorSector(this.navbarService.tipoEmpleado)
      .subscribe(resp => {
        this.pedidos = resp;
        console.log(this.pedidos);
      },
        error => {
          text: 'Error al traer pedidos';
        });
  }

    refrescarBarra(){
      // Trae la barra
        this.clientesService.traerClientes()
          .subscribe(resp => {
            this.clientes = resp;
            console.log(this.clientes);
          },
            error => {
              text: 'Error al traer clientes';
            });
      }
  
}
