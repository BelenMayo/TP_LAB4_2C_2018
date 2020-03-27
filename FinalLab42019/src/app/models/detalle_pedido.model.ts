import { getLocaleDateFormat } from '@angular/common';

export class DetallePedidoModel {
    public id_pedido: string;
    public id_menu: string;
    public precio: string;
    public cantidad: string;
    public subtotal: string;


    constructor() {
        this.id_pedido = "";
        this.id_menu = "";
        this.precio = "";
        this.cantidad = "";
        this.subtotal = "";
    }

    // Crea detalle-pedido
    guardarDetallePedido(detallePedido: any): DetallePedidoModel {
        let nuevoDetallePedido = new DetallePedidoModel();
        nuevoDetallePedido.id_pedido = detallePedido['id_pedido'].value;
        nuevoDetallePedido.id_menu = detallePedido['id_menu'].value;
        nuevoDetallePedido.precio = detallePedido['precio'].value;
        nuevoDetallePedido.cantidad = detallePedido['cantidad'].value;
        nuevoDetallePedido.subtotal = detallePedido['subtotal'].value;

        return nuevoDetallePedido
    }
}