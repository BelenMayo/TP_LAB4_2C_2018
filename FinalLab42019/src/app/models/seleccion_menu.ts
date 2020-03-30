import { getLocaleDateFormat } from '@angular/common';

export class SeleccionMenu {
    public id_menu: string;
    public id_categoria: string;
    public nombre: string;
    public precio: string;
    public foto: string;
    public seleccionado: boolean;


    constructor() {
        this.id_menu = "";
        this.id_categoria = "";
        this.nombre = "";
        this.precio = "";
        this.foto = "";
        this.seleccionado = false;
    }

    // Crea detalle-pedido
    static guardarSeleccionMenu(seleccionMenu: any): SeleccionMenu {
        let nuevaSeleccionMenu = new SeleccionMenu();
        nuevaSeleccionMenu.id_menu = seleccionMenu['id_menu'];
        nuevaSeleccionMenu.id_categoria = seleccionMenu['id_categoria'];
        nuevaSeleccionMenu.nombre = seleccionMenu['nombre'];
        nuevaSeleccionMenu.precio = seleccionMenu['precio'];
        nuevaSeleccionMenu.foto = seleccionMenu['foto'];
        nuevaSeleccionMenu.seleccionado = false;

        return nuevaSeleccionMenu
    }
}