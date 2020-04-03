import { getLocaleDateFormat } from '@angular/common';

export class DetallePedidoModel {
    public id_pedido: string;
    public id_menu: string;
    public precio: number;
    public cantidad: number;
    public subtotal: number;


    constructor() {
        this.id_pedido = "";
        this.id_menu = "";
        this.precio = 0;
        this.cantidad = 0;
        this.subtotal = 0;
    }

    // Crea detalle-pedido
    static guardarDetallePedido(detallePedido: any): DetallePedidoModel {
        let nuevoDetallePedido = new DetallePedidoModel();
        //nuevoDetallePedido.id_pedido = detallePedido['id_pedido'];
        nuevoDetallePedido.id_menu = detallePedido['id_menu'];
        nuevoDetallePedido.precio = detallePedido['precio'];
        nuevoDetallePedido.cantidad = detallePedido['cantidad'];
        nuevoDetallePedido.subtotal = detallePedido['subtotal'];

        return nuevoDetallePedido
    }
}