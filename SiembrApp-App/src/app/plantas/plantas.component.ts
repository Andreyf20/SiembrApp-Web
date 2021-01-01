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
    this.router.navigateByUrl(this.parentURL + '/agregarPlanta');
  }


  // Familias
  verFamiliasClick(): void{
    this.router.navigateByUrl(this.parentURL + '/listaFamilias').then(() => location.reload());
  }

  agregarFamiliaClick(newVal: number): void{
    this.executing = newVal;

  }

  // Fenologias
  verFenologiasClick(): void{
    this.router.navigateByUrl(this.parentURL + '/listaFenologias');
  }

  agregarFenologiaClick(newVal: number): void{
    this.executing = newVal;
  }

  // Metodo de dispersion
  verMetodosDispersionClick(): void{
    this.router.navigateByUrl(this.parentURL + '/listaMetodosDispersion');
  }

  agregarMetodoDispersionClick(newVal: number): void{
    this.executing = newVal;
  }

  // Agente polinizador
  verPolinizadoresClick(): void{

    this.router.navigateByUrl(this.parentURL + '/listaAgentesPolinizadores');

  }

  agregarPolinizador(newVal: number): void{
    this.executing = newVal;
  }

  back(): void{
    this.executing = -1;
    this.router.navigateByUrl(this.parentURL);
  }
}
