import { Routes, RouterModule } from '@angular/router';
import { PedidoListadoComponent } from './pedido-listado.component';
import { PedidoAltaComponent } from './pedido-alta.component';
import { PedidoModificarComponent } from './pedido-modificar.component';
import { PedidoDetalleComponent } from './pedido-detalle.component';

export const PEDIDO_ROUTES: Routes= [
    {path: 'listadoPedido', component: PedidoListadoComponent},
    {path: 'altaPedido', component: PedidoAltaComponent},
    {path: 'modificarPedido/:id', component: PedidoModificarComponent},
    {path: 'detallePedido/:id', component: PedidoDetalleComponent},
    {path: '**', pathMatch: 'full' , redirectTo:'home'}
];
