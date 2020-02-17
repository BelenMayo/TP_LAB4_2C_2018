
export class EncuestaModel {
    public puntaje_mesa: string;
    public puntaje_restaurante: string;
    public puntaje_mozo: string;
    public puntaje_cocinero: string;
    public comentarios: string;

    constructor() {
        this.puntaje_mesa = "";
        this.puntaje_restaurante = "";
        this.puntaje_mozo = "";
        this.puntaje_cocinero = "";
        this.comentarios = "";
    }
    
    // Crea encuesta
    guardarEncuesta(encuesta: any) :EncuestaModel{
        let nuevaEncuesta = new EncuestaModel();
        nuevaEncuesta.puntaje_mesa = encuesta['puntaje_mesa'].value;
        nuevaEncuesta.puntaje_restaurante = encuesta['puntaje_restaurante'].value;
        nuevaEncuesta.puntaje_mozo = encuesta['puntaje_mozo'].value;
        nuevaEncuesta.puntaje_cocinero = encuesta['puntaje_cocinero'].value;
        nuevaEncuesta.comentarios = encuesta['comentarios'].value;

        return nuevaEncuesta;
    }
}
