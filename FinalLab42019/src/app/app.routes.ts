import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CLIENTE_ROUTES } from './components/clientes/cliente.routes';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EMPLEADO_ROUTES } from './components/empleados/empleados.routes';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { MesasComponent } from './components/mesas/mesas.component';
import { MenuComponent } from './components/menu/menu.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { EncuestasComponent } from './components/encuestas/encuestas.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { PanelComponent } from './components/panel/panel.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { RegistroComponent } from './components/registro/registro.component';
import { GraficosComponent } from './components/estadisticas/graficos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConsultaComponent } from './components/consulta/consulta.component';

const APP_ROUTES: Routes= [
    {path: 'home', component: HomeComponent},
    {path: 'cliente', component: ClientesComponent, children: CLIENTE_ROUTES},
    {path: 'empleado', component: EmpleadosComponent, children: EMPLEADO_ROUTES},
    {path: 'mesa', component: MesasComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'pedido', component: PedidosComponent},
    {path: 'encuesta', component: EncuestasComponent},
    {path: 'estadistica', component: EstadisticasComponent},
    {path: 'grafico', component: GraficosComponent},
    {path: 'panel', component: PanelComponent},
    {path: 'mapa', component: MapaComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'navbar', component: NavbarComponent},
    {path: 'consulta', component: ConsultaComponent},
    {path: '**', pathMatch: 'full' , redirectTo:'login'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);    