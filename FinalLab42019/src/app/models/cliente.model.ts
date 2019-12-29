
export class ClienteModel {
    public nombre: string;
    public apellido: string;
    public telefono: string;
    public mail: string;
    public foto: string;
    public usuario: string;
    public password: string;


    constructor() {
        this.nombre = "";
        this.apellido = "";
        this.telefono = "";
        this.mail = "";
        this.foto = "";
        this.usuario = "";
        this.password = "";
    }
    
    // Crea cliente
    guardarCliente(cliente: any) :ClienteModel{
        let nuevoCliente = new ClienteModel();
        nuevoCliente.nombre = cliente['nombre'].value;
        nuevoCliente.apellido = cliente['apellido'].value;
        nuevoCliente.telefono = cliente['telefono'].value;
        nuevoCliente.mail = cliente['mail'].value;
        nuevoCliente.foto = cliente['foto'].value;
        nuevoCliente.usuario = cliente['usuario'].value;
        nuevoCliente.password = cliente['password'].value;

        return nuevoCliente;
    }

    // Modifica cliente
    modificarCliente(cliente: any) :ClienteModel{
        debugger;
        let nuevoCliente = new ClienteModel();
        nuevoCliente.nombre = cliente['nombre'].value;
        nuevoCliente.apellido = cliente['apellido'].value;
        nuevoCliente.telefono = cliente['telefono'].value;
        nuevoCliente.mail = cliente['mail'].value;
        nuevoCliente.foto = cliente['foto'].value;
        nuevoCliente.usuario = cliente['usuario'].value;
        nuevoCliente.password = cliente['password'].value;

        return nuevoCliente;
    }

}