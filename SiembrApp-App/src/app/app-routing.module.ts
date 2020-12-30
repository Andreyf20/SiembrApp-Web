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

  { path: 'home', component: HomeComponent, children: [

    { path: 'crearVivero', component: CrearViverosComponent },
    { path: 'listaViveros', component: ViverosDatatableComponent},
    { path: 'detalles', component: DetallesModificarViveroComponent }

  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const RoutingComponents = [LoginComponent, HomeComponent, ProfileComponent, ViverosDatatableComponent];
