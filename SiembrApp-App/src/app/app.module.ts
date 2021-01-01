import { SessionService } from './services/session/session.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from './services/request/request.service';
// Angular native
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';

// DataTable
import { DataTablesModule } from 'angular-datatables';

// Components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ViverosComponent } from './viveros/viveros.component';
import { PlantasComponent } from './plantas/plantas.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ViverosDatatableComponent } from './viveros/viveros-datatable/viveros-datatable.component';
import { CrearViverosComponent } from './viveros/crear-viveros/crear-viveros.component';
import { DetallesModificarViveroComponent } from './viveros/detalles-modificar-vivero/detalles-modificar-vivero.component';
import { PlantasDatatableComponent } from './plantas/plantas-datatable/plantas-datatable.component';
import { CrearPlantaComponent } from './plantas/crear-planta/crear-planta.component';
import { DetallesPlantaComponent } from './plantas/detalles-planta/detalles-planta.component';
import { FamiliasDatatableComponent } from './plantas/Familia/familias-datatable/familias-datatable.component';
import { FenologiasDatatableComponent } from './plantas/Fenologia/fenologias-datatable/fenologias-datatable.component';
import { PolinizadorDatatableComponent } from './plantas/Agente polinizador/polinizador-datatable/polinizador-datatable.component';
import { DispersionDatatableComponent } from './plantas/Metodo dispersion/dispersion-datatable/dispersion-datatable.component';
import { CrearMetodoDispersionComponent } from './plantas/Metodo dispersion/crear-metodo-dispersion/crear-metodo-dispersion.component';
import { CrearAgentePolinizadorComponent } from './plantas/Agente polinizador/polinizador-datatable/crear-agente-polinizador/crear-agente-polinizador.component';
import { CrearFenologiaComponent } from './plantas/Fenologia/fenologias-datatable/crear-fenologia/crear-fenologia.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    ViverosComponent,
    PlantasComponent,
    ViverosDatatableComponent,
    CrearViverosComponent,
    DetallesModificarViveroComponent,
    PlantasDatatableComponent,
    CrearPlantaComponent,
    DetallesPlantaComponent,
    FamiliasDatatableComponent,
    FenologiasDatatableComponent,
    PolinizadorDatatableComponent,
    DispersionDatatableComponent,
    CrearMetodoDispersionComponent,
    CrearAgentePolinizadorComponent,
    CrearFenologiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatStepperModule
  ],
  providers: [

    Title,
    RequestService,
    SessionService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
