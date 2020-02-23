
export class ChequeaLoginModel {
    public usuario: string;
    // public password: string;

    constructor() {
        this.usuario = "";
        // this.password = "";
    }
    
    // Crea usuario
    chequearUsuario(login: any) :ChequeaLoginModel{
        let chequeaUsuario = new ChequeaLoginModel();
        chequeaUsuario.usuario = login['usuario'].value;
        // chequeaUsuario.password = login['password'].value;

        return chequeaUsuario;
    }
}
