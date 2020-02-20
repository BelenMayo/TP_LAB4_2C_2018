
export class RegistroModel {
    public id_login: string;
    public nombre: string;
    public password: string;
    public id_tipo_empleado: string;
    public token: string;

    constructor() {
        this.id_login = "";
        this.nombre = "";
        this.password = "";
        this.id_tipo_empleado = "";
        this.token = "";
    }
    
    // Crea registro
    guardarRegistro(registro: any) :RegistroModel{
        let nuevoRegistro = new RegistroModel();
        nuevoRegistro.id_login = registro['id_login'].value;
        nuevoRegistro.nombre = registro['nombre'].value;
        nuevoRegistro.password = registro['password'].value;
        nuevoRegistro.id_tipo_empleado = registro['id_tipo_empleado'].value;
        nuevoRegistro.token = registro['token'].value;

        return nuevoRegistro;
    }
}
