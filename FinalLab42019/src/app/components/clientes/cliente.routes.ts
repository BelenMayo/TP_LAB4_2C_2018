import { Routes, RouterModule } from '@angular/router';
import { ClienteListadoComponent } from './cliente-listado.component';
import { ClienteAltaComponent } from './cliente-alta.component';
import { ClienteModificarComponent } from './cliente-modificar.component';
import { ClienteDetalleComponent } from './cliente-detalle.component';

export const CLIENTE_ROUTES: Routes= [
    {path: 'listado', component: ClienteListadoComponent},
    {path: 'alta', component: ClienteAltaComponent},
    {path: 'modificar', component: ClienteModificarComponent},
    {path: 'detalle', component: ClienteDetalleComponent},
    {path: '**', pathMatch: 'full' , redirectTo:'home'}
];
