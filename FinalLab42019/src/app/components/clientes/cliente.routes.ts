import { Routes, RouterModule } from '@angular/router';
import { ClienteListadoComponent } from './cliente-listado.component';
import { ClienteAltaComponent } from './cliente-alta.component';
import { ClienteModificarComponent } from './cliente-modificar.component';
import { ClienteDetalleComponent } from './cliente-detalle.component';

export const CLIENTE_ROUTES: Routes= [
    {path: 'listadoCliente', component: ClienteListadoComponent},
    {path: 'altaCliente', component: ClienteAltaComponent},
    {path: 'modificarCliente/:id', component: ClienteModificarComponent},
    {path: 'detalleCliente/:id', component: ClienteDetalleComponent},
    {path: '**', pathMatch: 'full' , redirectTo:'home'}
];
