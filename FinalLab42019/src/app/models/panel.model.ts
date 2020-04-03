import { getLocaleDateFormat } from '@angular/common';

export class PanelModel {
    public id_pedido: string;
    public id_tipo_empleado: string;
    public id_menu: string;
    public hora_inicio: Date;
    public tiempo_finalizacion: Date;
    public id_estado_pedido: string;


    constructor() {
        this.id_pedido = "";
        this.id_tipo_empleado = "";
        this.id_menu = "";
        this.hora_inicio = new Date();
        this.tiempo_finalizacion = new Date();
        this.id_estado_pedido = "";
    }

    // Crea panel
    static guardarPanel(panel: any): PanelModel {
        let nuevoDetallePedido = new PanelModel();
        //nuevoDetallePedido.id_pedido = panel['id_pedido'];

        switch (panel.id_categoria) {
            case "1":
                nuevoDetallePedido.id_tipo_empleado = "1";
                break;
            case "2":
                nuevoDetallePedido.id_tipo_empleado = "3";
                break;
            case "3":
                nuevoDetallePedido.id_tipo_empleado = "3";
                break;
            case "4":
                nuevoDetallePedido.id_tipo_empleado = "3";
                break;
        }
                nuevoDetallePedido.id_menu = panel['id_menu'];
                nuevoDetallePedido.hora_inicio = new Date();
                nuevoDetallePedido.tiempo_finalizacion = new Date();
                nuevoDetallePedido.id_estado_pedido = "1";

                return nuevoDetallePedido
        }
    }