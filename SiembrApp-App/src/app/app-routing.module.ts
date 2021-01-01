import { CrearMetodoDispersionComponent } from './plantas/Metodo dispersion/crear-metodo-dispersion/crear-metodo-dispersion.component';
import { FenologiasDatatableComponent } from './plantas/Fenologia/fenologias-datatable/fenologias-datatable.component';
import { FamiliasDatatableComponent } from './plantas/Familia/familias-datatable/familias-datatable.component';
import { PolinizadorDatatableComponent } from './plantas/Agente polinizador/polinizador-datatable/polinizador-datatable.component';
import { DispersionDatatableComponent } from './plantas/Metodo dispersion/dispersion-datatable/dispersion-datatable.component';
import { DetallesPlantaComponent } from './plantas/detalles-planta/detalles-planta.component';
import { CrearPlantaComponent } from './plantas/crear-planta/crear-planta.component';
import { PlantasDatatableComponent } from './plantas/plantas-datatable/plantas-datatable.component';
import { DetallesModificarViveroComponent } from './viveros/detalles-modificar-vivero/detalles-modificar-vivero.component';
import { CrearViverosComponent } from './viveros/crear-viveros/crear-viveros.component';
import { ViverosDatatableComponent } from './viveros/viveros-datatable/viveros-datatable.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CrearAgentePolinizadorComponent } from './plantas/Agente polinizador/polinizador-datatable/crear-agente-polinizador/crear-agente-polinizador.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },

  // Home
  { path: 'home', component: HomeComponent, children: [

    // Plantas
    { path: 'listaPlantas', component: PlantasDatatableComponent },
    { path: 'agregarPlanta', component: CrearPlantaComponent },
    { path: 'detallesPlanta', component: DetallesPlantaComponent },

    // Metodos de dispersion
    { path: 'listaMetodosDispersion', component: DispersionDatatableComponent },
    { path: 'crearMetodoDispersion', component: CrearMetodoDispersionComponent },

    // Familias
    { path: 'listaFamilias', component: FamiliasDatatableComponent },

    // Fenologias
    { path: 'listaFenologias', component: FenologiasDatatableComponent },

    // Agentes polinizadores
    { path: 'listaAgentesPolinizadores', component: PolinizadorDatatableComponent },
    { path: 'crearAgentePolinizador', component: CrearAgentePolinizadorComponent },

    // Viveros
    { path: 'crearVivero', component: CrearViverosComponent },
    { path: 'listaViveros', component: ViverosDatatableComponent },
    { path: 'detalles', component: DetallesModificarViveroComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full'}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const RoutingComponents = [LoginComponent, HomeComponent, ProfileComponent, ViverosDatatableComponent];
