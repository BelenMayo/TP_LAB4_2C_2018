import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Routes
import { APP_ROUTING } from '../app/app.routes';

//import { from } from 'rxjs';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//Componentes
import { AppComponent } from './app.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { MesasComponent } from './components/mesas/mesas.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ClienteAltaComponent } from './components/clientes/cliente-alta.component';
import { ClienteModificarComponent } from './components/clientes/cliente-modificar.component';
import { ClienteListadoComponent } from './components/clientes/cliente-listado.component';
import { ClienteDetalleComponent } from './components/clientes/cliente-detalle.component';
import { EmpleadoAltaComponent } from './components/empleados/empleado-alta.component';
import { EmpleadoDetalleComponent } from './components/empleados/empleado-detalle.component';
import { EmpleadoListadoComponent } from './components/empleados/empleado-listado.component';
import { EmpleadoModificarComponent } from './components/empleados/empleado-modificar.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';


//HTTP
import { HttpClientModule }    from '@angular/common/http';

// Servicios
import {ClientesService} from './services/clientes.service';
import {EmpleadosService} from './services/empleados.service';

// Imagenes
import { ImageUploadModule } from 'angular2-image-upload';

// Otros
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent,
    ClientesComponent,
    EmpleadosComponent,
    MesasComponent,
    MenuComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ClienteAltaComponent,
    ClienteModificarComponent,
    ClienteListadoComponent,
    ClienteDetalleComponent,
    EmpleadoAltaComponent,
    EmpleadoDetalleComponent,
    EmpleadoListadoComponent,
    EmpleadoModificarComponent,
    ImagenesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    ImageUploadModule.forRoot(),
    NgxPaginationModule,
    ModalModule.forRoot()
  ],
  providers: [
    ClientesService,
    EmpleadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
