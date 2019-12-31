
export class EmpleadoModel {
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
    
    // Crea empleado
    guardarEmpleado(empleado: any) :EmpleadoModel{
        let nuevoEmpleado = new EmpleadoModel();
        nuevoEmpleado.nombre = empleado['nombre'].value;
        nuevoEmpleado.apellido = empleado['apellido'].value;
        nuevoEmpleado.telefono = empleado['telefono'].value;
        nuevoEmpleado.mail = empleado['mail'].value;
        nuevoEmpleado.foto = empleado['foto'].value;
        nuevoEmpleado.usuario = empleado['usuario'].value;
        nuevoEmpleado.password = empleado['password'].value;

        return nuevoEmpleado;
    }

    // Modifica empleado
    modificarEmpleado(empleado: any) :EmpleadoModel{
        let nuevoEmpleado = new EmpleadoModel();
        nuevoEmpleado.nombre = empleado['nombre'].value;
        nuevoEmpleado.apellido = empleado['apellido'].value;
        nuevoEmpleado.telefono = empleado['telefono'].value;
        nuevoEmpleado.mail = empleado['mail'].value;
        nuevoEmpleado.foto = empleado['foto'].value;
        nuevoEmpleado.usuario = empleado['usuario'].value;
        nuevoEmpleado.password = empleado['password'].value;

        return nuevoEmpleado;
    }

}