import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.scss']
})
export class PlantasComponent implements OnInit {

  public executing;
  public parentURL = '/home';
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
   this.executing = -1;
  }


  // Plantas
  verPlantasClick(): void{
    this.router.navigateByUrl(this.parentURL + '/listaPlantas').then(() => location.reload());
  }

  agregarPlantaClick(newVal: number): void{
    this.executing = newVal;
    this.router.navigateByUrl(this.parentURL + '/crearPlanta').then(() => location.reload());
  }

  // Familias
  verFamiliasClick(): void{
    this.router.navigateByUrl(this.parentURL + '/listaFamilias').then(() => location.reload());
  }

  agregarFamiliaClick(newVal: number): void{
    this.executing = newVal;
    this.router.navigateByUrl(this.parentURL + '/crearFamilia').then(() => location.reload());
  }

  // Fenologias
  verFenologiasClick(): void{
    this.router.navigateByUrl(this.parentURL + '/listaFenologias').then(() => location.reload());
  }

  agregarFenologiaClick(newVal: number): void{
    this.executing = newVal;
    this.router.navigateByUrl(this.parentURL + '/crearFenologia').then(() => location.reload());
  }

  // Metodo de dispersion
  verMetodosDispersionClick(): void{
    this.router.navigateByUrl(this.parentURL + '/listaMetodosDispersion').then(() => location.reload());
  }

  agregarMetodoDispersionClick(newVal: number): void{
    this.executing = newVal;
    this.router.navigateByUrl(this.parentURL + '/crearMetodoDispersion').then(() => location.reload());
  }

  // Agente polinizador
  verPolinizadoresClick(): void{

    this.router.navigateByUrl(this.parentURL + '/listaAgentesPolinizadores').then(() => location.reload());

  }

  agregarPolinizador(newVal: number): void{
    this.executing = newVal;
    this.router.navigateByUrl(this.parentURL + '/crearAgentePolinizador').then(() => location.reload());
  }

  back(): void{
    this.executing = -1;
    this.router.navigateByUrl(this.parentURL);
  }
}
