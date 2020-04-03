import { getLocaleDateFormat } from '@angular/common';

export class SeleccionMenu {
    public id_menu: string;
    public id_categoria: string;
    public nombre: string;
    public precio: number;
    public foto: string;
    public seleccionado: boolean;
    public cantidad: number;

    constructor() {
        this.id_menu = "";
        this.id_categoria = "";
        this.nombre = "";
        this.precio = 0;
        this.foto = "";
        this.seleccionado = false;
        this.cantidad = 1;
    }

    // Crea detalle_pedido
    static guardarSeleccionMenu(seleccionMenu: any): SeleccionMenu {
        let nuevaSeleccionMenu = new SeleccionMenu();
        nuevaSeleccionMenu.id_menu = seleccionMenu['id_menu'];
        nuevaSeleccionMenu.id_categoria = seleccionMenu['id_categoria'];
        nuevaSeleccionMenu.nombre = seleccionMenu['nombre'];
        nuevaSeleccionMenu.precio = seleccionMenu['precio'];
        nuevaSeleccionMenu.foto = seleccionMenu['foto'];
        nuevaSeleccionMenu.seleccionado = false;
        nuevaSeleccionMenu.cantidad = 1;

        return nuevaSeleccionMenu
    }

    // Elimina detalle_pedido
    static eliminarSeleccionMenu(seleccionMenu: any): SeleccionMenu {
        let nuevaSeleccionMenu = new SeleccionMenu();

        return nuevaSeleccionMenu
    }
}