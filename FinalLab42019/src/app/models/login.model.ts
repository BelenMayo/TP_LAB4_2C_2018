
export class LoginModel {
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
    
    // Crea login
    guardarLogin(login: any) :LoginModel{
        let nuevoLogin = new LoginModel();
        nuevoLogin.id_login = login['id_login'].value;
        nuevoLogin.nombre = login['nombre'].value;
        nuevoLogin.password = login['password'].value;
        nuevoLogin.id_tipo_empleado = login['id_tipo_empleado'].value;
        nuevoLogin.token = login['token'].value;

        return nuevoLogin;
    }
}
