import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { HomeComponent } from './components/home/home.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { LoginComponent } from './components/login/login.component';
import { CLIENTE_ROUTES } from './components/clientes/cliente.routes';

const APP_ROUTES: Routes= [
    {path: 'home', component: HomeComponent},
    {path: 'cliente', component: ClientesComponent, children: CLIENTE_ROUTES},
    {path: 'empleado', component: EmpleadosComponent},
    {path: 'reserva', component: ReservasComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', pathMatch: 'full' , redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);