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
    public total: string;


    constructor() {
        this.id_pedido = "";
        this.id_cliente = "";
        this.id_mesa = "";
        this.codigo_mesa = "";
        this.codigo_pedido = "";
        this.id_estado_pedido = "";
        this.hora_pedido = new Date();
        this.tiempo_espera = new Date();
        this.total = "";
    }
    
    // Crea pedido
    guardarPedido(pedido: any) :PedidoModel{
        let nuevoPedido = new PedidoModel();
        nuevoPedido.id_pedido = pedido['id_pedido'].value;
        nuevoPedido.id_cliente = pedido['id_cliente'].value;
        nuevoPedido.id_mesa = pedido['id_mesa'].value;
        nuevoPedido.codigo_mesa = pedido['codigo_mesa'].value;
        nuevoPedido.codigo_pedido = pedido['codigo_pedido'].value;
        nuevoPedido.id_estado_pedido = pedido['id_estado_pedido'].value;
        nuevoPedido.hora_pedido = pedido['hora_pedido'].value;
        nuevoPedido.tiempo_espera = pedido['tiempo_espera'].value;
        nuevoPedido.total = pedido['total'].value;

        return nuevoPedido;
    }

    // Modifica pedido
    modificarPedido(pedido: any) :PedidoModel{
        let nuevoPedido = new PedidoModel();
        nuevoPedido.id_mesa = pedido['id_mesa'].value;
        nuevoPedido.codigo_mesa = pedido['codigo_mesa'].value;
        nuevoPedido.foto_mesa = pedido['foto_mesa'].value;
        nuevoPedido.id_estado_pedido = pedido['id_estado_pedido'].value;
        nuevoPedido.hora_pedido = pedido['hora_pedido'].value;
        nuevoPedido.tiempo_espera = pedido['tiempo_espera'].value;
        nuevoPedido.total = pedido['total'].value;
        return nuevoPedido;
    }

}