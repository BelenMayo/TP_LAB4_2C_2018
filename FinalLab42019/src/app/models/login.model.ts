
export class LoginModel {
    public nombre: string;
    public apellido: string;
    public usuario: string;
    public password: string;

    constructor() {
        this.nombre = "";
        this.apellido = "";
        this.usuario = "";
        this.password = "";
    }
    
    // Crea usuario
    guardarUsuario(login: any) :LoginModel{
        let nuevoUsuario = new LoginModel();
        nuevoUsuario.nombre = login['nombre'].value;
        nuevoUsuario.apellido = login['apellido'].value;
        nuevoUsuario.usuario = login['usuario'].value;
        nuevoUsuario.password = login['password'].value;

        return nuevoUsuario;
    }
}
