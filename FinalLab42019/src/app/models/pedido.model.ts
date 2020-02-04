
export class PedidoModel {
    public id_cliente: string;
    public id_mesa: string;
    public codigo_mesa: string;
    public foto_mesa: string;
    public id_estado_pedido: string;
    public hora_pedido: string;
    public tiempo_espera: string;
    public total: string;


    constructor() {
        this.id_cliente = "";
        this.id_mesa = "";
        this.codigo_mesa = "";
        this.foto_mesa = "";
        this.id_estado_pedido = "";
        this.hora_pedido = "";
        this.tiempo_espera = "";
        this.total = "";
    }
    
    // Crea pedido
    guardarPedido(pedido: any) :PedidoModel{
        let nuevoPedido = new PedidoModel();
        nuevoPedido.id_cliente = pedido['id_cliente'].value;
        nuevoPedido.id_mesa = pedido['id_mesa'].value;
        nuevoPedido.codigo_mesa = pedido['codigo_mesa'].value;
        nuevoPedido.foto_mesa = pedido['foto_mesa'].value;
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