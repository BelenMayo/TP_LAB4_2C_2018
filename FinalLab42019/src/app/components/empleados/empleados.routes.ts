import { Routes, RouterModule } from '@angular/router';
import { EmpleadoListadoComponent } from './empleado-listado.component';
import { EmpleadoAltaComponent } from './empleado-alta.component';
import { EmpleadoModificarComponent } from './empleado-modificar.component';
import { EmpleadoDetalleComponent } from './empleado-detalle.component';

export const EMPLEADO_ROUTES: Routes= [
    {path: 'listadoEmpleado', component: EmpleadoListadoComponent},
    {path: 'altaEmpleado', component: EmpleadoAltaComponent},
    {path: 'modificarEmpleado/:id', component: EmpleadoModificarComponent},
    {path: 'detalleEmpleado/:id', component: EmpleadoDetalleComponent},
    {path: '**', pathMatch: 'full' , redirectTo:'home'}
];
