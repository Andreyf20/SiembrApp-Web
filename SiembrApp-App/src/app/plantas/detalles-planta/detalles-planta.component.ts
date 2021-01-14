import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RequestService } from 'src/app/services/request/request.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detalles-planta',
  templateUrl: './detalles-planta.component.html',
  styleUrls: ['./detalles-planta.component.scss']
})
export class DetallesPlantaComponent implements OnInit, OnDestroy {
  // TODO: Falta mostrar flor
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

  imagen=''

  // Subs
  plantaInfoSub: Subscription;
  eliminarSub: Subscription;
  modificarSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private requestService: RequestService
    ) { }

  ngOnInit(): void {
    
    this.imagen = sessionStorage.getItem('fotoPlanta');
    sessionStorage.removeItem(this.nombrecientifico);

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
    if (this.eliminarSub){ this.eliminarSub.unsubscribe(); }
    if (this.modificarSub){ this.modificarSub.unsubscribe(); }
  }

  actualizarDatosVivero(): void{

    const confirm = prompt('¿Está seguro de actualizar los datos del vivero? (Escriba "si" para confirmar)');

    if (confirm === 'si'){

      // Enviar al servicio los parametros para la actualizacion de los datos
      this.modificarSub = this.requestService.modificarPlanta(

        // Parametros

        this.nombrecomun,
        this.nombrecientifico,
        this.origen,
        this.minRangoAltitudinal,
        this.maxRangoAltitudinal,
        this.metros,
        this.requerimientosdeluz,
        this.habito,
        this.familia,
        this.fenologia,
        this.polinizador,
        this.metododispersion,
        this.fruto,
        this.texturaFruto,
        this.flor,
        this.usosConocidos,
        this.paisajerecomendado,
        this.imagen

      ).subscribe( res => {
        //console.log(res);
        if (res){
          this.snackBar.open('Se han modificado los datos del vivero con éxito', 'Entendido', { duration: 5000, });
          return;
        }else{
          this.snackBar.open('Ocurrió un error', 'Entendido', { duration: 5000, });
        }
      });

    }else{
      this.snackBar.open('No se actualizaron los datos', 'Entendido', { duration: 2000 });
    }
  }
}
