import { RequestService } from 'src/app/services/request/request.service';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Planta } from 'src/app/models/Planta';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-plantas-datatable',
  templateUrl: './plantas-datatable.component.html',
  styleUrls: ['./plantas-datatable.component.scss']
})
export class PlantasDatatableComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  plantas: Planta[] = [];
  dtTrigger: Subject<any> = new Subject<any>();

  plantasSub: Subscription;
  eliminateSub: Subscription;

  private parentURL = '/home';

  constructor(
    private requestService: RequestService,
    private router: Router,
    private snackbar: MatSnackBar
    ) { }

  // Cannot reinitialize datatable error fix: https://stackoverflow.com/a/49648807 
  ngOnInit(): void {

    this.plantasSub = this.requestService.getPlantas().subscribe(res => {

      res.forEach(element => {
        this.plantas.push(element as Planta);
      });
      this.rerender();
    });
  }

  ngAfterViewInit(): void {this.dtTrigger.next(); }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
       dtInstance.destroy();
       this.dtTrigger.next();
   });
  }

  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();
    this.plantasSub.unsubscribe();
    if (this.eliminateSub){ this.eliminateSub.unsubscribe(); }
  }

  rowClick(targetPlanta: Planta): void{
    // TODO: Hacer un boton para ver la imagen on command
    const plantaSinImagen = {
      
      nombrecomun: targetPlanta.nombrecomun,
      nombrecientifico: targetPlanta.nombrecientifico,
      familia: targetPlanta.familia,
      origen: targetPlanta.origen,
      fenologia: targetPlanta.fenologia,
      polinizador: targetPlanta.polinizador,
      requerimientosdeluz: targetPlanta.requerimientosdeluz,
      metododispersion: targetPlanta.metododispersion,
      frutos: targetPlanta.frutos,
      texturafruto: targetPlanta.texturafruto,
      flor: targetPlanta.flor,
      paisajerecomendado: targetPlanta.paisajerecomendado,
      habito: targetPlanta.habito,
      usosconocidos: targetPlanta.usosconocidos,
      minrangoaltitudinal: targetPlanta.minrangoaltitudinal,
      maxrangoaltitudinal: targetPlanta.maxrangoaltitudinal,
      metros: targetPlanta.metros

    };

    this.router.navigate([this.parentURL + '/detallesPlanta'], { queryParams: { ...plantaSinImagen }} ).then( () => {
      location.reload();
    });
  }

  eliminar(nombre: string): void{

    const confirm = prompt(`¿Está seguro de eliminar el vivero ${nombre}? (Digite "${nombre}" para confirmar)`);

    if (confirm === nombre){
      // Enviar al servicio que hace requests al API
      this.eliminateSub = this.requestService.eliminarPlanta(nombre).subscribe( res => {

        if (res){
          this.router.navigateByUrl('/listaViveros');
          alert(`${nombre} eliminado exitosamente`);
          location.reload();
          return;
        }else{
          alert(`Ocurrió un error en la eliminación de ${nombre}`);
        }
      });

    }else{
      this.snackbar.open(`No se eliminó ${nombre}`, 'Entendido', { duration: 3000 });
    }
  }
}
