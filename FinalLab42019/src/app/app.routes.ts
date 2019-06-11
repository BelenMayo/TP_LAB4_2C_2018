import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const APP_ROUTES: Routes= [
    {path: 'home', component: HomeComponent},
    {path: 'cliente', component: ClientesComponent},
    {path: 'empleado', component: EmpleadosComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', pathMatch: 'full' , redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);