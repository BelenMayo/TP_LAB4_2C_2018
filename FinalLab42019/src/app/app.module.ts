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
import { PedidoListadoComponent } from './components/pedidos/pedido-listado.component';
import { PedidoDetalleComponent } from './components/pedidos/pedido-detalle.component';
import { PedidoAltaComponent } from './components/pedidos/pedido-alta.component';
import { PedidoModificarComponent } from './components/pedidos/pedido-modificar.component';

//HTTP
import { HttpClientModule }    from '@angular/common/http';

// Servicios
import {ClientesService} from './services/clientes.service';
import {EmpleadosService} from './services/empleados.service';
import {ExcelService} from './services/excel.service';

// Imagenes
import { ImageUploadModule } from 'angular2-image-upload';

// Otros
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EncuestasComponent } from './components/encuestas/encuestas.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { PanelComponent } from './components/panel/panel.component';

// Graficos
import { ChartsModule } from 'ng2-charts';
import { MapaComponent } from './components/mapa/mapa.component';

// Maps
import { AgmCoreModule } from '@agm/core';
import { RegistroComponent } from './components/registro/registro.component';
import { GraficosComponent } from './components/estadisticas/graficos.component';


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
    PedidoListadoComponent,
    PedidoDetalleComponent,
    PedidoAltaComponent,
    PedidoModificarComponent,
    EncuestasComponent,
    EstadisticasComponent,
    PanelComponent,
    MapaComponent,
    RegistroComponent,
    GraficosComponent,
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
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCMZH8ZfJ8SBwnQ_SnfmtbI8hDlByezbts',
      libraries: ['places'] 
    }),

  ],
  providers: [
    ClientesService,
    EmpleadosService,
    ExcelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
