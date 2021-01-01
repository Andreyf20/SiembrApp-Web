import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-planta',
  templateUrl: './detalles-planta.component.html',
  styleUrls: ['./detalles-planta.component.scss']
})
export class DetallesPlantaComponent implements OnInit, OnDestroy {

  // Atributos de Planta
  nombrecomun = '';
  nombrecientifico = '';
  familia = '';
  origen = '';
  fenologia = '';
  polinizador = '';
  requerimientosdeluz = '';
  metododispersion = '';
  fruto = '';
  texturaFruto = '';
  flor = '';
  habito = '';
  usosConocidos = '';
  paisajerecomendado = '';
  minRangoAltitudinal = '';
  maxRangoAltitudinal = '';
  metros = '';

  // Subs
  plantaInfoSub: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.plantaInfoSub = this.route.queryParams.subscribe( params => {

        this.nombrecomun = params.nombrecomun;
        this.nombrecientifico = params.nombrecientifico;
        this.familia = params.familia;
        this.origen = params.origen;
        this.fenologia = params.fenologia;
        this.polinizador = params.polinizador;
        this.requerimientosdeluz = params.requerimientosdeluz;
        this.metododispersion = params.metododispersion;
        this.fruto = params.frutos;
        this.texturaFruto = params.texturafruto;
        this.flor = params.flor;
        this.habito = params.habito;
        this.usosConocidos = params.usosconocidos;
        this.paisajerecomendado = params.paisajerecomendado;
        this.minRangoAltitudinal = params.minrangoaltitudinal;
        this.maxRangoAltitudinal = params.maxrangoaltitudinal;
        this.metros = params.metros;

    });
  }

  ngOnDestroy(): void{

    this.plantaInfoSub.unsubscribe();

  }
}