import { getLocaleDateFormat } from '@angular/common';

export class SectorPedidoModel {
    public id_pedido: string;
    public id_empleado: string;
    public id_menu: string;
    public id_categoria: string;
    public id_seccion: string;
    public hora_inicio: Date;
    public tiempo_finalizacion: Date;
    public id_estado_pedido: string;


    constructor() {
        this.id_pedido="";
        this.id_empleado="";
        this.id_menu="";
        this.id_categoria="";
        this.id_seccion="";
        this.hora_inicio= new Date();
        this.tiempo_finalizacion= new Date();
        this.id_estado_pedido= "";
    }

    // Crea panel
    guardarPanel(panel: any): SectorPedidoModel {
        let nuevoDetallePedido = new SectorPedidoModel();
        nuevoDetallePedido.id_pedido = panel['id_pedido'].value;
        nuevoDetallePedido.id_empleado = panel['id_empleado'].value;
        nuevoDetallePedido.id_menu = panel['id_menu'].value;
        nuevoDetallePedido.id_categoria = panel['id_categoria'].value;
        nuevoDetallePedido.id_seccion = panel['id_seccion'].value;
        nuevoDetallePedido.hora_inicio = panel['hora_inicio'].value;
        nuevoDetallePedido.tiempo_finalizacion = panel['tiempo_finalizacion'].value;
        nuevoDetallePedido.id_estado_pedido = panel['id_estado_pedido'].value;

        return nuevoDetallePedido
    }
}