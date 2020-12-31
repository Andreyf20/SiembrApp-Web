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

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },

  // Home
  { path: 'home', component: HomeComponent, children: [

    // Viveros
    { path: 'crearVivero', component: CrearViverosComponent },
    { path: 'listaViveros', component: ViverosDatatableComponent },
    { path: 'detalles', component: DetallesModificarViveroComponent },

    // Plantas
    { path: 'listaPlantas', component: PlantasDatatableComponent },
    { path: 'listaFamilias', component: DetallesPlantaComponent },
    { path: 'listaFenologias', component: CrearPlantaComponent },

    { path: 'agregarPlanta', component: CrearPlantaComponent },
    { path: 'detallesPlanta', component: DetallesPlantaComponent },

  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const RoutingComponents = [LoginComponent, HomeComponent, ProfileComponent, ViverosDatatableComponent];
