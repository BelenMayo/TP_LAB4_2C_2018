import { getLocaleDateFormat } from '@angular/common';

export class PedidoModel {
    public id_cliente: string;
    public id_mesa: string;
    public codigo_pedido: string;
    public id_estado_pedido: string;
    public hora_pedido: Date;
    public tiempo_espera: Date;
    public total: number;
    public detallePedido: Array<any>;


    constructor() {
        this.id_cliente = "";
        this.id_mesa = "";
        this.codigo_pedido = "";
        this.id_estado_pedido = "";
        this.hora_pedido = new Date();
        this.tiempo_espera = new Date();
        this.total = 0;
        this.detallePedido = [];
    }
    
    // Crea pedido
    static guardarPedido(cliente, mesa, importe) :PedidoModel{
        let nuevoPedido = new PedidoModel();
        nuevoPedido.id_cliente = cliente;
        nuevoPedido.id_mesa = mesa;
        nuevoPedido.codigo_pedido = (Math.floor(Math.random() * 99999) + 10000).toString();
        nuevoPedido.id_estado_pedido = "1";
        nuevoPedido.hora_pedido = new Date();
        nuevoPedido.tiempo_espera = new Date();
        nuevoPedido.total = importe;

        return nuevoPedido;
    }

}

export class EstadoPedidoModel {
    public id_estado_pedido: number;

    constructor() {
        this.id_estado_pedido = 0;
    }
    
    // Guarda Estado Pedido
    static guardarEstadoPedido(id_estado_pedido) :EstadoPedidoModel{
        let nuevoEstadoPedido = new EstadoPedidoModel();
        nuevoEstadoPedido.id_estado_pedido = id_estado_pedido;

        return nuevoEstadoPedido;
    }
}