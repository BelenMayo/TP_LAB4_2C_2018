
export class MesaModel {
    public id_mesa: string;
    public nro_mesa: string;
    public nombre: string;
    public id_estado_mesa: string;
    public codigo_mesa: string;

    constructor() {
        this.id_mesa = "";
        this.nro_mesa = "";
        this.nombre = "";
        this.id_estado_mesa = "";
        this.codigo_mesa = "";
    }

    // Modifica mesa
    modificarMesa(mesa: any): MesaModel {
        let modificaMesa = new MesaModel();
        modificaMesa.id_mesa = mesa['id_mesa'].value;
        modificaMesa.nro_mesa = mesa['nro_mesa'].value;
        modificaMesa.nombre = mesa['nombre'].value;
        modificaMesa.id_estado_mesa = mesa['id_estado_mesa'].value;
        modificaMesa.codigo_mesa = mesa['codigo_mesa'].value;

        return modificaMesa;
    }


}