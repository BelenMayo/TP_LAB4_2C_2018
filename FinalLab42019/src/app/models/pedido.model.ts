import { getLocaleDateFormat } from '@angular/common';

export class PedidoModel {
    public id_pedido: string;
    public id_cliente: string;
    public id_mesa: string;
    public codigo_mesa: string;
    public codigo_pedido: string;
    public id_estado_pedido: string;
    public hora_pedido: Date;
    public tiempo_espera: Date;
    public total: number;


    constructor() {
        this.id_pedido = "";
        this.id_cliente = "";
        this.id_mesa = "";
        this.codigo_mesa = "";
        this.codigo_pedido = "";
        this.id_estado_pedido = "";
        this.hora_pedido = new Date();
        this.tiempo_espera = new Date();
        this.total = 0;
    }
    
    // Crea pedido
    static guardarPedido(pedido: any, cliente, mesa) :PedidoModel{
        let nuevoPedido = new PedidoModel();
        nuevoPedido.id_pedido = pedido['id_pedido'];
        nuevoPedido.id_cliente = cliente;
        nuevoPedido.id_mesa = mesa;
        nuevoPedido.codigo_pedido = (Math.floor(Math.random() * 99999) + 10000).toString();
        nuevoPedido.id_estado_pedido = "1";
        nuevoPedido.hora_pedido = new Date();
        nuevoPedido.tiempo_espera = new Date();
        nuevoPedido.total = pedido['total'];

        return nuevoPedido;
    }

}